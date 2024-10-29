'use client'
import { getNotionContent } from '@/work/service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Heading, Loading, Paragraph } from '@/components'
import {
    contentBlock,
    ContentBlockType,
    contentPage,
} from '@/work/utils/format'
import { formatDate } from '@/utils/date'
import { ReactElement } from 'react'
import { HeadingType, ParagraphType } from '@/work/types'

export default function WorkContent() {
    const params = useParams()
    const PAGE_ID = `${params.uuid}`

    const { data: notion, ...notionResponse } = useQuery({
        queryKey: ['notion-posts'],
        queryFn: () => getNotionContent(`${PAGE_ID}/api`),
    })

    if (notionResponse.isLoading) return <Loading />
    const { title, created_time } = contentPage(notion?.data.page)
    const block = contentBlock(notion?.data.block)

    console.log(block[21])

    const components = (node: ContentBlockType, index: number) => {
        const { content } = node
        const { rich_text } = content as HeadingType | ParagraphType
        const flatText = rich_text?.map((text) => text.plain_text).join(' ')

        const type: { [key: string]: () => ReactElement } = {
            paragraph: () => <Paragraph key={index}>{flatText}</Paragraph>,
            heading_2: () => (
                <Heading type={'h2'} key={index}>
                    {flatText}
                </Heading>
            ),
            heading_3: () => (
                <Heading type={'h3'} key={index}>
                    {flatText}
                </Heading>
            ),
            image: () => {
                return (
                    <div className="max-w-2xl mx-auto">
                        <Image
                            alt={`img-${title}`}
                            className="rounded mx-auto"
                            src={node?.content.file.url}
                            sizes="100vw"
                            width={300}
                            height={300}
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            priority
                        />
                    </div>
                )
            },
        }
        const renderFunction = type[node.type]
        if (renderFunction) return renderFunction()
        console.error(`Unknown type: ${node.type}-${index}`)
        return null
    }
    return (
        <div>
            <Heading type="h3" className="mb-4 sm:mb-3">
                {title}
            </Heading>
            <div className="flex mb-8 sm:mb-10">
                <Paragraph>{`${formatDate(created_time)}`}</Paragraph>
            </div>
            <div className="w-full grid gap-6 text-base text-font-medium sm:text-lg leading-normal">
                {block.map((node, index) => components(node, index))}
            </div>
        </div>
    )
}
