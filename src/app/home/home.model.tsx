import { AsyncQueryPostEntries } from '@/app/home/home.actions'
import {
    setContentfulData,
    useContentfulStoreHydrated,
} from '@/store/contentful.store'
import { useEffect } from 'react'
import {
    ContentfulPostData,
    PostDataItem,
} from '@/store/contentful.store/contentful.type'
import { toast } from 'sonner'

const currentDate = new Date()
const isoDateString = currentDate.toISOString()

function handleFeaturedItems(data: PostDataItem[]) {
    const filterByTag = data?.filter((i) => i.fields.tag === 'frontend')
    return filterByTag?.map((i) => ({
        title: i.fields.title,
        url: `/content/${i.fields.slug}`,
    }))
}

function handleFollowingItems(posts: PostDataItem[]) {
    return posts?.filter((i) => i.isFollow)
}

export default function HomeModel(initialData?: any) {
    const contentFulStore = useContentfulStoreHydrated()

    const { data: postResponseData, ...postResponse } =
        AsyncQueryPostEntries(initialData)

    const recommended = postResponseData?.data.items
    const includes = postResponseData?.data.includes
    const following = handleFollowingItems(contentFulStore?.data.items)
    const featured = handleFeaturedItems(recommended)

    const handleContentfulDataStore = () => {
        const content = postResponseData?.data
        const updatedAt = isoDateString
        const payload = { ...contentFulStore, updatedAt, data: content }
        postResponse.isSuccess && setContentfulData(payload)
        postResponse.isError && toast('Error fetching posts.')
    }

    useEffect(handleContentfulDataStore, [postResponseData])

    return {
        state: {
            recommended,
            following,
            includes,
            featured,
        },
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>
