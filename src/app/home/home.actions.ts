import { useInfiniteQuery } from '@tanstack/react-query'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { PAGE_SIZE } from '@/store/contentful.store/contentful.type'

export const AsyncQueryPostEntries = (initialData?: any) => {
    return useInfiniteQuery({
        queryKey: ['postEntries'],
        queryFn: ({ pageParam = 0 }) =>
            contentfulRepository.getPostEntries({
                skip: pageParam,
                limit: PAGE_SIZE,
            }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const { total, skip, limit } = lastPage?.data ?? {}
            const nextSkip = (skip ?? 0) + (limit ?? PAGE_SIZE)
            return nextSkip < (total ?? 0) ? nextSkip : undefined
        },
        initialData: initialData
            ? {
                  pages: [{ data: initialData }],
                  pageParams: [0],
              }
            : undefined,
    })
}
