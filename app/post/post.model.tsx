import useNotionStore, {
    setNotionPostBlockContent,
} from '@/_store/notion.store'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function useModel() {
    const searchParams = useSearchParams()
    const paramId = `${searchParams.get('id')}`

    const { content } = useNotionStore()

    const asyncNotionPostResponse = async (): Promise<{ data: any }> => {
        const response = await fetch(`post/api/?id=${paramId}`)
        return response.json()
    }
    const { data: notionPostData, ...notionPostResponse } = useQuery({
        queryKey: ['post'],
        queryFn: asyncNotionPostResponse,
        enabled: !!paramId,
    })
    const handleSetNotionPostBlock = () => {
        if (!notionPostData?.data) return
        setNotionPostBlockContent(notionPostData?.data)
    }

    useEffect(handleSetNotionPostBlock, [notionPostData?.data])
    return {
        state: {
            isLoading: notionPostResponse.isLoading,
            data: content.find((item) => item.block),
        },
        actions: {},
    }
}
