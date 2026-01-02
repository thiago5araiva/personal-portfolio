import { useQuery } from '@tanstack/react-query'
import { contentfulRepository } from '@/services/contentful/contentful-repository'

export const QueryPostAssetById = (id: string) => {
    return useQuery({
        queryKey: ['postAssets'],
        queryFn: () => contentfulRepository.getPostAssetById(id),
        enabled: !!id,
    })
}

export const QueryPostEntries = () => {
    const day = 1000 * 60 * 60 * 24
    return useQuery({
        queryKey: ['postEntries'],
        queryFn: () => contentfulRepository.getPostEntries(),
        staleTime: day,
    })
}
