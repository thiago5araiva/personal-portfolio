'use client'

import { TypeContentModel } from './content.model'
import Markdown from './components/markdown'
import AvatarComponent from '@/components/avatar.component'
import { ArrowLeft, Bookmark, BookmarkCheck, Dot } from 'lucide-react'
import Link from 'next/link'

type Props = TypeContentModel

const formatPostDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function ContentView({ state, actions }: Props) {
    const { post, isLoading, isNotFound } = state
    const { handleBookmark } = actions

    if (isLoading) return <ContentView.Loading />
    if (isNotFound || !post) return <ContentView.NotFound />

    const { fields, sys, isFollow } = post
    const readingTime = Math.round(fields.body.split(' ').length / 200)

    return (
        <article className="content-page max-w-3xl mx-auto py-8">
            {/* Back Button */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-caesar-black/50 hover:text-caesar-black transition-colors mb-8">
                <ArrowLeft size={18} />
                <span>Back to posts</span>
            </Link>

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-caesar-black mb-4">
                    {fields.title}
                </h1>
                <p className="text-lg text-caesar-black/70 mb-6">
                    {fields.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap gap-2 text-sm text-caesar-black/50">
                        <AvatarComponent name="Thiago Saraiva" />
                        <Dot className="text-caesar-black/30" />
                        <time dateTime={sys.createdAt}>
                            {formatPostDate(sys.createdAt)}
                        </time>
                        <Dot className="text-caesar-black/30" />
                        <span>{readingTime} min read</span>
                    </div>
                    <button
                        onClick={() => handleBookmark(sys.id)}
                        className="p-2 rounded-full hover:bg-caesar-black/5 transition-colors">
                        {isFollow && <BookmarkCheck size={22} />}
                        {!isFollow && <Bookmark size={22} />}
                    </button>
                </div>
            </header>

            {/* Divider */}
            <div className="border-b border-caesar-black/10 mb-8" />

            {/* Content */}
            <div className="content-body">
                <Markdown content={fields.body} />
            </div>
        </article>
    )
}

ContentView.Loading = function Loading() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="animate-pulse space-y-4">
                <div className="h-4 w-24 bg-caesar-black/10 rounded" />
                <div className="h-10 w-3/4 bg-caesar-black/10 rounded" />
                <div className="h-6 w-full bg-caesar-black/10 rounded" />
                <div className="h-4 w-48 bg-caesar-black/10 rounded" />
                <div className="border-b border-caesar-black/10 my-8" />
                <div className="space-y-3">
                    <div className="h-4 w-full bg-caesar-black/10 rounded" />
                    <div className="h-4 w-5/6 bg-caesar-black/10 rounded" />
                    <div className="h-4 w-4/6 bg-caesar-black/10 rounded" />
                </div>
            </div>
        </div>
    )
}

ContentView.NotFound = function NotFound() {
    return (
        <div className="max-w-3xl mx-auto py-8 text-center">
            <h1 className="text-2xl font-bold text-caesar-black mb-4">
                Post not found
            </h1>
            <p className="text-caesar-black/70 mb-6">
                The post you&apos;re looking for doesn&apos;t exist or has been
                removed.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-caesar-black hover:text-caesar-black/70 transition-colors">
                <ArrowLeft size={18} />
                <span>Back to posts</span>
            </Link>
        </div>
    )
}
