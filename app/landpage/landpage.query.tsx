import { useQuery } from '@tanstack/react-query'

export default function LandpageQuery() {
    const asyncGetLandpageContent = useQuery({
        queryKey: ['landpage'],
        queryFn: async (): Promise<{ data: any }> =>
            await fetch('/landpage/api').then((res) => res.json()),
    })
    return { asyncGetLandpageContent }
}
