import Link from 'next/link'
import { ContentfulIncludes, PostDataItem } from '@/services/contentful/contentful.type'

type Props = {
    data: PostDataItem[]
    includes?: ContentfulIncludes
    renderedAt: string
    total: number
}

const formatIssue = (n: number) => String(n).padStart(3, '0')

const formatDate = (iso: string) =>
    new Date(iso)
        .toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
        .toUpperCase()

const readTime = (body: string) => Math.max(1, Math.round(body.split(' ').length / 200))

export default function Content({ data, total }: Props) {
    if (!data?.length) return null

    return (
        <div className="home__list">
            {data.map((item, idx) => {
                const { sys, fields } = item
                const { title, description, tag, slug, body } = fields
                const issueNumber = total - idx
                const time = readTime(body)
                const tagName = (tag ?? 'portfolio').toUpperCase()

                return (
                    <Link
                        key={sys.id}
                        href={`/content/${slug}`}
                        className="group block py-[clamp(3rem,6vw,5.5rem)] border-b border-caesar-black/15 first:border-t-0">
                        <article className="grid grid-cols-12 gap-x-4">
                            <div className="col-span-6 md:col-span-2 font-mono text-[0.8125rem] uppercase tracking-meta text-caesar-burgundy">
                                №&nbsp;{formatIssue(issueNumber)}
                            </div>
                            <div className="col-span-6 md:col-span-10 md:text-right font-mono text-[0.8125rem] uppercase tracking-meta text-caesar-black/55">
                                {formatDate(sys.createdAt)}
                            </div>

                            <h2 className="col-span-12 md:col-start-2 md:col-span-9 mt-[clamp(1.5rem,3vw,2.25rem)] font-display font-medium tracking-editorial leading-[1.05] text-caesar-black text-[var(--type-h2)] transition-colors duration-500 ease-out-quart group-hover:text-caesar-burgundy">
                                {title}
                            </h2>

                            <p className="col-span-12 md:col-start-3 md:col-span-7 mt-[clamp(0.75rem,1vw,1.25rem)] font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/70 max-w-[var(--measure-lede)]">
                                {description}
                            </p>

                            <div className="col-span-12 md:col-start-1 md:col-span-7 mt-[clamp(1.5rem,2.5vw,2.5rem)] flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55">
                                <span>
                                    {tagName} · {time} MIN
                                </span>
                                <span
                                    className="inline-block h-px w-8 bg-caesar-black/30 transition-all duration-500 ease-out-quart group-hover:w-16 group-hover:bg-caesar-burgundy"
                                    aria-hidden
                                />
                                <span className="transition-colors duration-500 ease-out-quart group-hover:text-caesar-burgundy">
                                    READ →
                                </span>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </div>
    )
}
