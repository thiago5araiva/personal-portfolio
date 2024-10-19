'use client'

import { Heading, Loading } from '@/components'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import Header from './header'
import { INotionBlock, INotionPage } from './types'
import { getNotionContent } from '@/work/service'

export default function Content() {
    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['notion'],
        queryFn: () => getNotionContent('work/api'),
    })

    const page: INotionPage = notionData?.data.page
    const block: INotionBlock[] = notionData?.data.block.results
    const title = page?.properties.title.title[0].text.content
    const subtitle = block?.find((b) => b.type === 'paragraph')
    const content = block?.filter((b) => b.type === 'child_page')

    console.clear()
    console.log(block)

    if (notionResponse.isLoading) return <Loading />
    return (
        <section className="work">
            <Header
                title={title}
                subtitle={subtitle?.paragraph.rich_text[0].text.content}
            />
            <div className="grid gap-6">
                {content.map(({ id, child_page }) => {
                    return (
                        <Link href={`/work/${id}`} key={id}>
                            <div className="pb-6 sm:pb-10 border-b border-border-primary">
                                <Heading
                                    type="h2"
                                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
                                >
                                    {child_page.title}
                                </Heading>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
