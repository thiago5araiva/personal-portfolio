import Link from 'next/link'
import type { FeaturedItem } from '@/app/(portfolio)/home/Server'

type Props = { data: FeaturedItem[] }

function MetaLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45 mb-3">
            {children}
        </p>
    )
}

export default function HomeFeatured({ data }: Props) {
    return (
        <div className="author grid gap-10">
            <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-burgundy mb-3">
                    The author
                </p>
                <p className="font-sans text-[0.9375rem] leading-relaxed text-caesar-black/75 max-w-[34ch]">
                    Thiago Saraiva, fullstack engineer in São Paulo. A decade between banking, healthcare, and consumer platforms. Pinterest, Squarespace, now Zoom.
                </p>
            </div>

            <div>
                <MetaLabel>Currently</MetaLabel>
                <p className="font-sans text-[0.9375rem] text-caesar-black/75">Building at Zoom.</p>
            </div>

            {data?.length > 0 && (
                <div>
                    <MetaLabel>Most read</MetaLabel>
                    <ol className="grid gap-4">
                        {data.slice(0, 4).map((post, i) => (
                            <li key={post.url}>
                                <Link
                                    href={post.url}
                                    className="group flex items-baseline gap-3 text-caesar-black/80 transition-colors duration-300 ease-out-quart hover:text-caesar-burgundy">
                                    <span className="font-mono text-[0.6875rem] tracking-meta text-caesar-black/35 shrink-0 mt-0.5">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-sans text-[0.9375rem] leading-snug line-clamp-2">
                                        {post.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            <Link
                href="/about"
                className="group inline-flex items-center justify-between gap-3 pt-2 border-t border-caesar-black/15 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                <span>About the author</span>
                <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 ease-out-quart group-hover:translate-x-1">
                    →
                </span>
            </Link>
        </div>
    )
}
