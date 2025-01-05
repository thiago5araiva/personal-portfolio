'use client'
import { Loading } from '@/_components'
import { useQuery } from '@tanstack/react-query'
import { BlockType } from '../types'
import ContentCode from './ContentCode'
import ContentHeading from './ContentHeading'
import ContentParagraph from './ContentParagraph'
import { useEffect, useState } from 'react'

type Props = {
    uuid: string
}
export default function WorkItem({ uuid }: Props) {
    const getContent = async (): Promise<{ data: any }> => {
        const response = await fetch(`${uuid}/api`)
        return response.json()
    }
    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['work-item'],
        queryFn: () => getContent(),
    })
    const components = (node: BlockType, type: string) => {
        const { id, heading_2 } = node
        const values: { [key: string]: JSX.Element } = {
            heading_2: <ContentHeading key={id} data={node?.heading_2} />,
            paragraph: <ContentParagraph key={id} data={node?.paragraph} />,
            code: <ContentCode key={id} data={node?.code} />,
        }
        return values[type]
    }
    if (notionResponse.isLoading) return <Loading />
    return (
        <div className="grid">
            <h1>WorkItem</h1>
            {notionData?.data?.results.map((node: BlockType) =>
                components(node, node.type)
            )}
        </div>
    )
}
