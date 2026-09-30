'use client'

import { useContentfulStoreHydrated } from '@/store/contentful.store'
import { PostDataItem } from '@/services/contentful/contentful.type'

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

    return {
        state: {
            post,
            isLoading,
            isNotFound,
        },
    }
}

export type TypeContentModel = ReturnType<typeof useContentModel>
