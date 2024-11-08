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
import { HeadingType, ImageType, ParagraphType } from '@/work/types'
import { ChevronRight } from 'lucide-react'

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

    const components = (node: ContentBlockType, index: number) => {
        const { content } = node
        const { rich_text } = content as HeadingType | ParagraphType
        const flatText = rich_text?.map((text) => text.plain_text).join(' ')

        const type: { [key: string]: () => ReactElement } = {
            bulleted_list_item: () => {
                const text = flatText.replace(/\s*\\r\\n/g, ' ')
                return (
                    <div className="flex items-center gap-6">
                        <ChevronRight className="w-4 h-6" />
                        <Paragraph>{text}</Paragraph>
                    </div>
                )
            },
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
                const image = node as unknown as ImageType
                return (
                    <div className="w-full">
                        <Image
                            alt={`img-${title}`}
                            className="rounded mx-auto"
                            src={image?.content.file.url}
                            sizes="100vw"
                            width={1024}
                            height={300}
                            style={{
                                width: '100vw',
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
