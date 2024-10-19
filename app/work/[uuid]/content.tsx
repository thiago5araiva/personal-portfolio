'use client'
import { getNotionContent } from '@/work/service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { INotionBlock, INotionPage } from '../types'
import { Heading, Loading } from '@/components'
export default function WorkContent() {
    const params = useParams()
    const PAGE_ID = `${params.uuid}`
    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['notion-posts'],
        queryFn: () => getNotionContent(`${PAGE_ID}/api`),
    })

    const page: INotionPage = notionData?.data.page
    const block: INotionBlock[] = notionData?.data.block.results
    const title = page?.properties.title.title[0].text.content
    const subtitle = block?.find((b) => b.type === 'paragraph')

    if (notionResponse.isLoading) return <Loading />
    console.log(page)
    // const getWorkContentByIdResponse = useQuery({
    //     queryKey: ['pageWorkById', uuid],
    //     queryFn: () => getWorkContentById(uuid),
    //     enabled: !!params.uuid,
    // })
    // const data = getWorkContentByIdResponse?.data?.workContent
    // const content = data?.content.json as Document
    // if (getWorkContentByIdResponse.isLoading) return <Loading />
    // const options = {
    //     renderNode: {
    //         [BLOCKS.HEADING_2]: (node: any, children: any) => (
    //             <Heading type="h2">{children}</Heading>
    //         ),
    //         [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
    //             <Paragraph>{children}</Paragraph>
    //         ),
    //         [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
    //             const img = data?.content?.links.assets.block.find(
    //                 (item) => item.sys.id === node.data.target.sys.id
    //             )
    //             if (!img) return
    //             return (
    //                 <Image
    //                     className="rounded mx-auto"
    //                     src={img.url}
    //                     alt={img.title}
    //                     width={img.width}
    //                     height={img.height}
    //                     priority
    //                 />
    //             )
    //         },
    //     },
    // }
    return (
        <div>
            <Heading type="h3" className="mb-4 sm:mb-3">
                {title}
            </Heading>
            {/* <div className="flex justify-between mb-8 sm:mb-10">
                <Paragraph>{`${formatDate(data?.createdAt)} • ${data?.type}`}</Paragraph>
                <div className="flex gap-3 ml-6">
                    {data?.stack.map((item, index) => (
                        <Badge
                            key={index}
                            className="bg-background-secondary texst-font-low cursor-pointer"
                        >
                            {item}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="w-full grid gap-6 text-base text-font-medium sm:text-lg leading-normal">
                {documentToReactComponents(content, options)}
                {data?.embed && data?.embed.length > 7 && (
                    <embed
                        src={data?.embed}
                        className="border-2 rounded border-font-low"
                        style={{ width: '100%', height: 300 }}
                    />
                )}
            </div> */}
        </div>
    )
}
