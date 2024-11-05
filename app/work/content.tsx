'use client'

import { Heading, Loading } from '@/components'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Header from './header'
import { getNotionContent } from '@/work/service'
import { contentBlock, contentPage } from '@/work/utils/format'
import Link from 'next/link'
import { HeadingType } from '@/work/types'

export default function Content() {
    const { data: notion, ...response } = useQuery({
        queryKey: ['notion'],
        queryFn: () => getNotionContent('work/api'),
    })
    if (response.isLoading) return <Loading />
    const page = contentPage(notion?.data.page)
    const block = contentBlock(notion?.data.block)
    const subtitle = block.find((item) => item.type === 'heading_2')
    const child = block.filter((item) => item.type === 'child_page')
    const { rich_text } = subtitle?.content as HeadingType

    return (
        <section className="work">
            <Header title={page?.title} subtitle={rich_text[0].plain_text} />
            <div className="grid gap-6">
                {child?.map((item) => {
                    const { title } = item.content as { title: string }
                    return (
                        <Link href={`/work/${item?.id}`} key={item.id}>
                            <div className="pb-6 sm:pb-10 border-b border-border-primary">
                                <Heading
                                    type="h2"
                                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
                                >
                                    {title}
                                </Heading>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
