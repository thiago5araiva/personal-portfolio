'use client'
import { Heading, Loading } from '@/components'
import { useQuery } from '@tanstack/react-query'
import ContentCode from './components/ContentCode'
import ContentHeading from './components/ContentHeading'
import ContentParagraph from './components/ContentParagraph'
import { BlockType } from '@/post/types'
import useStore from '@/store'
import { useEffect } from 'react'

type Props = {
    query: { [key: string]: string | string[] | undefined }
}
export default function PostPageContent({ query }: Props) {
    const { content, setContent } = useStore()
    const work = content?.components.section[0]
    const getContent = async (): Promise<{ data: any }> => {
        const response = await fetch(`post/api/?id=${query.id}`)
        return response.json()
    }
    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['post'],
        queryFn: async () => await getContent(),
    })

    const components = (node: BlockType, type: string) => {
        const { id } = node
        const values: { [key: string]: JSX.Element } = {
            heading_2: <ContentHeading key={id} data={node?.heading_2} />,
            paragraph: <ContentParagraph key={id} data={node?.paragraph} />,
            code: <ContentCode key={id} data={node?.code} />,
        }
        return values[type]
    }
    const post = work?.content.find((item) => item.id === query.id)
    if (notionResponse.isLoading) return <Loading />
    return (
        <div className="grid">
            <Heading type="h1" className="text-4xl text-font-medium mb-4">
                {post?.child_page.title}
            </Heading>
            {notionData?.data?.map((node: BlockType) =>
                components(node, node.type)
            )}
        </div>
    )
}
