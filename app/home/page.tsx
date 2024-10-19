import getQueryClient from '@/providers/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getPageHomeContent } from './actions'
import Content from './content'

export default async function WorkPage() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['pageHome'],
        queryFn: getPageHomeContent,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
