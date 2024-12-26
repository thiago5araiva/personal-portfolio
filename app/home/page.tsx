import getQueryClient from '@/providers/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getPageHomeContent } from './actions'
import Content from './content'
import { notionRepository } from '@/services/notion/notion-repository'
import { getNotionContent } from '@/work/service'

export default async function WorkPage() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['pageHome'],
        queryFn: getPageHomeContent,
    })

    await queryClient.prefetchQuery({
        queryKey: ['notion'],
        queryFn: () => getNotionContent('work/api'),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
