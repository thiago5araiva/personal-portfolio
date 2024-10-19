import getQueryClient from '@/providers/getQueryClient'
import Content from './content'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getNotionContent, getPageWorkContent } from './actions'

export default async function WorkPage() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['pageWork'],
        queryFn: getPageWorkContent,
    })

    await queryClient.prefetchQuery({
        queryKey: ['notion'],
        queryFn: getNotionContent,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
