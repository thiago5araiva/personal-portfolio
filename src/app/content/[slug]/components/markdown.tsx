'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
    content: string
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

                    // Inline code
                    code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const isInline = !match

                        if (isInline) {
                            return (
                                <code
                                    className="bg-caesar-black/10 text-caesar-black px-1.5 py-0.5 rounded text-sm font-mono"
                                    {...props}>
                                    {children}
                                </code>
                            )
                        }

                        return (
                            <SyntaxHighlighter
                                style={oneDark}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg my-4 text-sm"
                                showLineNumbers>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        )
                    },

                    // Pre (wrapper for code blocks)
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

                    // Images
                    img: ({ src, alt }) => (
                        <img
                            src={src}
                            alt={alt || ''}
                            className="rounded-lg my-4 max-w-full h-auto"
                        />
                    ),

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
