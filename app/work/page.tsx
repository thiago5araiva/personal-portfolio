import getQueryClient from '@/providers/getQueryClient'
import { getNotionContent } from '@/work/service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { PAGE_ID } from './constants'
import Content from './content'

export default async function WorkPage() {
    const queryClient = getQueryClient()
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
