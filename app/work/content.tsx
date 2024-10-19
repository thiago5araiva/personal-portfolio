'use client'

import { Heading, Loading } from '@/components'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { getNotionContent, getPageWorkContent } from './actions'
import Header from './header'
import { INotionBlock, INotionPage } from './api/notion/types'

export default function Content() {
    const getWorkContentResponse = useQuery({
        queryKey: ['pageWork'],
        queryFn: getPageWorkContent,
    })

    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['notion'],
        queryFn: getNotionContent,
    })

    const page: INotionPage = notionData?.data.page
    const block: INotionBlock[] = notionData?.data.block.results

    const title = page?.properties.title.title[0].text.content
    const subtitle = block?.find((b) => b.type === 'paragraph')
    const content = block?.filter((b) => b.type === 'child_page')

    console.clear()
    console.log(content)

    // const content = getWorkContentResponse?.data?.pageWork
    if (notionResponse.isLoading) return <Loading />
    return (
        <section className="work">
            <Header
                title={title}
                subtitle={subtitle?.paragraph.rich_text[0].text.content}
            />
            <div className="grid gap-6">
                {content.map(({ id, child_page }) => (
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
                ))}
            </div>
            {/*<div className="grid gap-6">*/}
            {/*    {content?.contentCollection?.items.map(({ sys, title }) => (*/}
            {/*        <Link href={`/work/${sys.id}`} key={sys.id}>*/}
            {/*            <div className="pb-6 sm:pb-10 border-b border-border-primary">*/}
            {/*                <Heading*/}
            {/*                    type="h2"*/}
            {/*                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"*/}
            {/*                >*/}
            {/*                    {title}*/}
            {/*                </Heading>*/}
            {/*            </div>*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </section>
    )
}
