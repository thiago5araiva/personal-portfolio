import getQueryClient from '@/_services/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getGlobalFooter } from './actions'

import Footer from './component'

export default async function WorkPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['globalFooter'],
    queryFn: getGlobalFooter,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Footer />
    </HydrationBoundary>
  )
}
