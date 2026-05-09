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
        return <div className="bg-caesar-black/5 my-6 h-32 animate-pulse" />
    }

    return (
        <SyntaxHighlighter
            style={style}
            language={language}
            PreTag="div"
            className="my-6 text-[0.875rem] font-mono"
            showLineNumbers={showLineNumbers}
            wrapLongLines={false}>
            {children}
        </SyntaxHighlighter>
    )
}

type Props = {
    content: string
}

function normalizeContentfulUrl(url: string | undefined): string {
    if (!url) return ''
    if (url.startsWith('//')) {
        return `https:${url}`
    }
    return url
}

export default function Markdown({ content }: Props) {
    // Pre-find the raw src of the first image in the markdown body so we can
    // mark it as the LCP candidate. Stateless and immune to strict-mode
    // double-invocation, unlike a render-scope counter.
    const firstImageSrc = content.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1]

    return (
        <div className="markdown-content text-caesar-black/80">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="font-display font-medium tracking-editorial leading-[1.1] text-caesar-black text-[clamp(1.875rem,2.5vw+0.5rem,2.5rem)] mt-12 mb-5">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="font-display font-medium tracking-editorial leading-[1.15] text-caesar-black text-[clamp(1.5rem,1.5vw+0.75rem,2rem)] mt-12 mb-4">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="font-display font-medium leading-snug text-caesar-black text-[clamp(1.25rem,0.75vw+0.9rem,1.5rem)] mt-10 mb-3">
                            {children}
                        </h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="font-sans font-semibold leading-snug text-caesar-black text-[1.0625rem] mt-8 mb-2 uppercase tracking-[0.05em]">
                            {children}
                        </h4>
                    ),

                    p: ({ children }) => (
                        <p className="font-sans text-[var(--type-body)] leading-[1.7] text-caesar-black/80 my-5">
                            {children}
                        </p>
                    ),

                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-caesar-black underline decoration-caesar-burgundy/60 decoration-1 underline-offset-4 hover:decoration-caesar-burgundy hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart"
                            target="_blank"
                            rel="noopener noreferrer">
                            {children}
                        </a>
                    ),

                    ul: ({ children }) => (
                        <ul className="my-5 ml-1 space-y-2 font-sans text-[var(--type-body)] leading-[1.7] text-caesar-black/80 [&_>_li]:relative [&_>_li]:pl-6 [&_>_li]:before:content-['—'] [&_>_li]:before:absolute [&_>_li]:before:left-0 [&_>_li]:before:text-caesar-black/40 [&_>_li]:before:font-mono">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="my-5 ml-1 space-y-2 font-sans text-[var(--type-body)] leading-[1.7] text-caesar-black/80 list-decimal list-inside marker:text-caesar-black/40 marker:font-mono marker:text-[0.875rem]">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => <li>{children}</li>,

                    blockquote: ({ children }) => (
                        <blockquote className="my-8 pl-6 font-display italic text-caesar-black/85 text-[clamp(1.125rem,0.5vw+1rem,1.375rem)] leading-snug">
                            {children}
                        </blockquote>
                    ),

                    code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const codeContent = String(children).replace(/\n$/, '')
                        const hasMultipleLines = codeContent.includes('\n')
                        const isCodeBlock = match || hasMultipleLines

                        if (!isCodeBlock) {
                            return (
                                <code
                                    className="bg-caesar-black/[0.06] text-caesar-black px-1.5 py-0.5 rounded-sm text-[0.875em] font-mono"
                                    {...props}>
                                    {children}
                                </code>
                            )
                        }

                        if (match) {
                            const language = match[1]
                            const noLineNumbersLanguages = ['markdown', 'md', 'text', 'txt', 'plain']
                            const shouldShowLineNumbers = !noLineNumbersLanguages.includes(language.toLowerCase())

                            return (
                                <LazyCodeBlock
                                    language={language}
                                    showLineNumbers={shouldShowLineNumbers}>
                                    {codeContent}
                                </LazyCodeBlock>
                            )
                        }

                        return (
                            <pre className="bg-caesar-black/[0.04] border border-caesar-black/10 p-4 my-6 overflow-x-auto">
                                <code className="text-[0.875rem] font-mono text-caesar-black/80 whitespace-pre">
                                    {codeContent}
                                </code>
                            </pre>
                        )
                    },

                    pre: ({ children }) => <>{children}</>,

                    hr: () => (
                        <hr className="border-0 my-12 flex items-center justify-center text-caesar-black/30 before:content-['§§§'] before:font-mono before:text-[0.75rem] before:tracking-[0.6em]" />
                    ),

                    strong: ({ children }) => (
                        <strong className="font-medium text-caesar-black">{children}</strong>
                    ),

                    em: ({ children }) => (
                        <em className="italic text-caesar-black/90">{children}</em>
                    ),

                    img: ({ src, alt }) => {
                        const isLcpCandidate = !!src && src === firstImageSrc
                        const normalizedSrc = normalizeContentfulUrl(src)
                        const improvedAlt =
                            alt?.startsWith('cover-') || alt?.startsWith('conver-')
                                ? alt
                                      .replace(/^(cover|conver)-/, '')
                                      .replace(/-/g, ' ')
                                      .replace(/\b\w/g, (c) => c.toUpperCase())
                                : alt || 'Article image'

                        return (
                            <span className="block relative w-full my-8">
                                <Image
                                    src={normalizedSrc}
                                    alt={improvedAlt}
                                    width={800}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    priority={isLcpCandidate}
                                    fetchPriority={isLcpCandidate ? 'high' : 'auto'}
                                />
                                {improvedAlt && improvedAlt !== 'Article image' && (
                                    <span className="block mt-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/45">
                                        {improvedAlt}
                                    </span>
                                )}
                            </span>
                        )
                    },

                    table: ({ children }) => (
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse text-[0.9375rem] font-sans">
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead className="border-b-2 border-caesar-black/30">{children}</thead>
                    ),
                    tbody: ({ children }) => <tbody>{children}</tbody>,
                    tr: ({ children }) => (
                        <tr className="border-b border-caesar-black/15">{children}</tr>
                    ),
                    th: ({ children }) => (
                        <th className="px-3 py-2 text-left font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/55">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="px-3 py-3 text-caesar-black/80 align-top">{children}</td>
                    ),
                }}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
