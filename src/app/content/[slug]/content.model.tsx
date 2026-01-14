'use client'

import {
    setContentFollowing,
    useContentfulStoreHydrated,
} from '@/store/contentful.store'
import { PostDataItem } from '@/store/contentful.store/contentful.type'

type UseContentModelProps = {
    slug: string
}

export default function useContentModel({ slug }: UseContentModelProps) {
    const { data } = useContentfulStoreHydrated()

    const item = data.items
    const post = item.find((item: PostDataItem) => item.fields.slug === slug)!

    const isLoading = !data.items.length
    const isNotFound = !isLoading && !post

    const handleBookmark = (id = '') => setContentFollowing(id)

    return {
        state: {
            post,
            isLoading,
            isNotFound,
        },
        actions: {
            handleBookmark,
        },
    }
}

export type TypeContentModel = ReturnType<typeof useContentModel>
