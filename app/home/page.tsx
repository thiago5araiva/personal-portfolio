import getQueryClient from '@/providers/getQueryClient'
import { NotionHttpClient } from '@/services/notion/notion-http-client'
import { NotionRepository } from '@/services/notion/notion-repository'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getPageHomeContent } from './actions'
import Content from './content'

const notionHttpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(notionHttpClient)

export default async function WorkPage() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['pageHome'],
        queryFn: getPageHomeContent,
    })

    await queryClient.prefetchQuery({
        queryKey: ['notion'],
        queryFn: () => notionRepository.getNotionContent('work/api'),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
