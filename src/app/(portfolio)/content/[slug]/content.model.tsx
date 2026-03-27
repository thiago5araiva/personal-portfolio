'use client'

import {
    setContentFollowing,
    useContentfulStoreHydrated,
} from '@/store/contentful.store'
import { PostDataItem } from '@/store/contentful.store/contentful.type'

type UseContentModelProps = {
    slug: string
    serverPost?: PostDataItem
}

export default function useContentModel({
    slug,
    serverPost,
}: UseContentModelProps) {
    const { data } = useContentfulStoreHydrated()

    const storePost = data.items.find(
        (item: PostDataItem) => item.fields.slug === slug
    )
    const post = storePost ?? serverPost!

    const isLoading = !post
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
