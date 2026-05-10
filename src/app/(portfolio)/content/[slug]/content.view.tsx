'use client'

import { TypeContentModel } from './content.model'
import Markdown from './components/markdown'
import { ArrowLeft, Bookmark, BookmarkCheck } from 'lucide-react'
import Link from 'next/link'

type Props = TypeContentModel

const formatPostDate = (dateTime: string) => {
    return new Date(dateTime)
        .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        .toUpperCase()
}

export default function ContentView({ state, actions }: Props) {
    const { post, isLoading, isNotFound } = state
    const { handleBookmark } = actions

    if (isLoading) return <ContentView.Loading />
    if (isNotFound || !post) return <ContentView.NotFound />

    const { fields, sys, isFollow } = post
    const readingTime = Math.max(1, Math.round(fields.body.split(' ').length / 200))
    const tagName = (fields.tag ?? 'portfolio').toUpperCase()

    return (
        <article className="content-page max-w-[68ch] mx-auto pt-[clamp(2rem,4vw,4rem)] pb-[clamp(4rem,8vw,8rem)]">
            <Link
                href="/"
                className="group inline-flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55 hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart mb-[clamp(2.5rem,5vw,4rem)]">
                <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-500 ease-out-quart group-hover:-translate-x-1" />
                <span>Back to issues</span>
            </Link>

            <header className="mb-[clamp(2.5rem,5vw,4rem)]">
                <div className="flex items-baseline justify-between font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55 mb-[clamp(1.5rem,3vw,2.5rem)]">
                    <span className="text-caesar-burgundy">{tagName}</span>
                    <time dateTime={sys.createdAt}>{formatPostDate(sys.createdAt)}</time>
                </div>

                <h1 className="font-display font-medium tracking-editorial leading-[1.05] text-caesar-black text-[clamp(2rem,3.5vw,3.25rem)] mb-[clamp(1rem,2vw,1.5rem)]">
                    {fields.title}
                </h1>

                <p className="font-sans text-[clamp(1.0625rem,0.25vw+1rem,1.25rem)] leading-relaxed text-caesar-black/70 max-w-[55ch]">
                    {fields.description}
                </p>

                <div className="flex items-center justify-between mt-[clamp(2rem,4vw,3rem)] pt-6 border-t border-caesar-black/15">
                    <div className="flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55">
                        <span>By Thiago Saraiva</span>
                        <span aria-hidden className="inline-block h-px w-6 bg-caesar-black/30" />
                        <span>{readingTime} MIN</span>
                    </div>
                    <button
                        onClick={() => handleBookmark(sys.id)}
                        aria-label={isFollow ? 'Remove bookmark' : 'Bookmark this article'}
                        className="text-caesar-black/55 hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                        {isFollow ? <BookmarkCheck size={18} strokeWidth={1.5} /> : <Bookmark size={18} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            <div className="content-body">
                <Markdown content={fields.body} />
            </div>
        </article>
    )
}

ContentView.Loading = function Loading() {
    return (
        <div className="max-w-[68ch] mx-auto pt-[clamp(2rem,4vw,4rem)] pb-16">
            <div className="animate-pulse space-y-4">
                <div className="h-3 w-24 bg-caesar-black/10 rounded-sm" />
                <div className="h-10 w-3/4 bg-caesar-black/10 rounded-sm" />
                <div className="h-5 w-full bg-caesar-black/10 rounded-sm" />
                <div className="h-3 w-40 bg-caesar-black/10 rounded-sm" />
                <div className="border-b border-caesar-black/15 my-8" />
                <div className="space-y-3">
                    <div className="h-4 w-full bg-caesar-black/10 rounded-sm" />
                    <div className="h-4 w-5/6 bg-caesar-black/10 rounded-sm" />
                    <div className="h-4 w-4/6 bg-caesar-black/10 rounded-sm" />
                </div>
            </div>
        </div>
    )
}

ContentView.NotFound = function NotFound() {
    return (
        <div className="max-w-[68ch] mx-auto pt-[clamp(4rem,8vw,8rem)] pb-16">
            <p className="font-mono text-[0.75rem] uppercase tracking-meta text-caesar-burgundy mb-4">
                №&nbsp;404
            </p>
            <h1 className="font-display font-medium tracking-editorial leading-[1.05] text-caesar-black text-[clamp(2rem,3.5vw,3rem)] mb-4">
                This issue was lost in the mail.
            </h1>
            <p className="font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/70 max-w-[55ch] mb-8">
                The post you are looking for does not exist or has been removed.
            </p>
            <Link
                href="/"
                className="group inline-flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                <span aria-hidden className="inline-block h-px w-6 bg-caesar-black/40 transition-all duration-500 ease-out-quart group-hover:w-10 group-hover:bg-caesar-burgundy" />
                Back to the index
            </Link>
        </div>
    )
}
