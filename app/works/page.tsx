import getQueryClient from '@/_services/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getPageWorkContent } from './actions'
import Works from './content'

export default async function WorkPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['pageWorks'],
    queryFn: getPageWorkContent,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Works />
    </HydrationBoundary>
  )
}
