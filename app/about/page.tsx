import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Content from './content'
import getQueryClient from '@/providers/getQueryClient'
import { getPageAboutContent } from './actions'

export default async function AboutPage() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['pageAbout'],
        queryFn: getPageAboutContent,
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}
