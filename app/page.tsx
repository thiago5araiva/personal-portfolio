import Content from '@/home/content'
import getQueryClient from '@/_providers/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default async function Page() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['home'],
        queryFn: () => fetch('home/api'),
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
