import { useQuery } from '@tanstack/react-query'
import { contentfulRepository } from '@/services/contentful/contentful-repository'

export default function ContentfulQuery() {
    const postEntries = useQuery({
        queryKey: ['postEntries'],
        queryFn: () => contentfulRepository.getPostEntries(),
    })

    return {
        query: { postEntries },
        mutations: {},
    }
}
