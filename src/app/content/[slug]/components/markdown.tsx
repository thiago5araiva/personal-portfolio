'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function LazyCodeBlock({
    language,
    showLineNumbers,
    children,
}: {
    language: string
    showLineNumbers: boolean
    children: string
}) {
    const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null)
    const [style, setStyle] = useState<any>(null)

    useEffect(() => {
        Promise.all([
            import('react-syntax-highlighter').then((mod) => mod.Prism),
            import('react-syntax-highlighter/dist/esm/styles/prism').then(
                (mod) => mod.oneDark
            ),
        ]).then(([Comp, theme]) => {
            setSyntaxHighlighter(() => Comp)
            setStyle(theme)
        })
    }, [])

    if (!SyntaxHighlighter || !style) {
        return (
            <div className="bg-caesar-black/5 rounded-lg my-4 h-32 animate-pulse" />
        )
    }

    return (
        <SyntaxHighlighter
            style={style}
            language={language}
            PreTag="div"
            className="rounded-lg my-4 text-sm"
            showLineNumbers={showLineNumbers}
            wrapLongLines={false}>
            {children}
        </SyntaxHighlighter>
    )
}

type Props = {
    content: string
}

/**
 * Normalizes Contentful asset URLs by adding the https protocol
 * when the URL uses protocol-relative format (starts with //)
 */
function normalizeContentfulUrl(url: string | undefined): string {
    if (!url) return ''
    if (url.startsWith('//')) {
        return `https:${url}`
    }
    return url
}

export default function Markdown({ content }: Props) {

    return (
        <div className="markdown-content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Headings
                    h1: ({ children }) => (
                        <h1 className="text-3xl sm:text-4xl font-bold text-caesar-black mt-8 mb-4">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl sm:text-3xl font-bold text-caesar-black mt-6 mb-3">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl sm:text-2xl font-semibold text-caesar-black mt-5 mb-2">
                            {children}
                        </h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="text-lg sm:text-xl font-semibold text-caesar-black mt-4 mb-2">
                            {children}
                        </h4>
                    ),

                    // Paragraphs
                    p: ({ children }) => (
                        <p className="text-caesar-black/80 leading-relaxed mb-4">
                            {children}
                        </p>
                    ),

                    // Links
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-caesar-black underline underline-offset-2 hover:text-caesar-black/70 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer">
                            {children}
                        </a>
                    ),

                    // Lists
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-1 text-caesar-black/80">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-1 text-caesar-black/80">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => <li className="ml-2">{children}</li>,

                    // Blockquote
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-caesar-black/30 pl-4 italic text-caesar-black/70 my-4">
                            {children}
                        </blockquote>
                    ),

                    // Code blocks and inline code
                    code: ({ className, children, node, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const codeContent = String(children).replace(/\n$/, '')

                        // Detect if this is a code block (has language OR has multiple lines)
                        const hasMultipleLines = codeContent.includes('\n')
                        const isCodeBlock = match || hasMultipleLines

                        // Inline code (single line without language)
                        if (!isCodeBlock) {
                            return (
                                <code
                                    className="bg-caesar-black/10 text-caesar-black px-1.5 py-0.5 rounded text-sm font-mono"
                                    {...props}>
                                    {children}
                                </code>
                            )
                        }

                        // Code block with syntax highlighting (has language specified)
                        if (match) {
                            const language = match[1]
                            const noLineNumbersLanguages = [
                                'markdown',
                                'md',
                                'text',
                                'txt',
                                'plain',
                            ]
                            const shouldShowLineNumbers =
                                !noLineNumbersLanguages.includes(language.toLowerCase())

                            return (
                                <LazyCodeBlock
                                    language={language}
                                    showLineNumbers={shouldShowLineNumbers}>
                                    {codeContent}
                                </LazyCodeBlock>
                            )
                        }

                        // Code block without language (ASCII diagrams, plain text blocks)
                        return (
                            <pre className="bg-caesar-black/5 border border-caesar-black/10 rounded-lg p-4 my-4 overflow-x-auto">
                                <code className="text-sm font-mono text-caesar-black/80 whitespace-pre">
                                    {codeContent}
                                </code>
                            </pre>
                        )
                    },

                    // Pre (wrapper for code blocks) - pass through to let code handle it
                    pre: ({ children }) => <>{children}</>,

                    // Horizontal rule
                    hr: () => <hr className="border-caesar-black/20 my-8" />,

                    // Strong/Bold
                    strong: ({ children }) => (
                        <strong className="font-semibold text-caesar-black">
                            {children}
                        </strong>
                    ),

                    // Emphasis/Italic
                    em: ({ children }) => (
                        <em className="italic text-caesar-black/90">
                            {children}
                        </em>
                    ),

                    // Images - normalize Contentful URLs and use Next.js Image
                    img: ({ src, alt }) => {
                        const normalizedSrc = normalizeContentfulUrl(src)
                        // Generate a more descriptive alt text from the filename if alt is a cover-* pattern
                        const improvedAlt =
                            alt?.startsWith('cover-') || alt?.startsWith('conver-')
                                ? alt
                                      .replace(/^(cover|conver)-/, '')
                                      .replace(/-/g, ' ')
                                      .replace(/\b\w/g, (c) => c.toUpperCase())
                                : alt || 'Article image'

                        return (
                            <span className="block relative w-full my-6">
                                <Image
                                    src={normalizedSrc}
                                    alt={improvedAlt}
                                    width={800}
                                    height={450}
                                    className="rounded-lg w-full h-auto object-cover"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                />
                            </span>
                        )
                    },

                    // Tables
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full border-collapse border border-caesar-black/20">
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead className="bg-caesar-black/5">
                            {children}
                        </thead>
                    ),
                    tbody: ({ children }) => (
                        <tbody>
                            {children}
                        </tbody>
                    ),
                    tr: ({ children }) => (
                        <tr className="border-b border-caesar-black/20">
                            {children}
                        </tr>
                    ),
                    th: ({ children }) => (
                        <th className="border border-caesar-black/20 bg-caesar-black/5 px-4 py-2 text-left font-semibold text-caesar-black">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border border-caesar-black/20 px-4 py-2 text-caesar-black/80">
                            {children}
                        </td>
                    ),
                }}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
