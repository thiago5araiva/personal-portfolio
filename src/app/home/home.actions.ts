import { useQuery } from '@tanstack/react-query'
import { contentfulRepository } from '@/services/contentful/contentful-repository'

export const AsyncQueryPostEntries = () => {
    return useQuery({
        queryKey: ['postEntries'],
        queryFn: () => contentfulRepository.getPostEntries(),
    })
}
