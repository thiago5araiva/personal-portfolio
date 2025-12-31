import { QueryPostEntries } from '@/services/contentful/contentful-query'
import { setContentfulData, useContentfulStoreHydrated } from '@/store/contentful.store'
import { useEffect, useState } from 'react'
import { ContentfulPostData } from '@/store/contentful.store/contentful.type'
import { toast } from 'sonner'

const currentDate = new Date()
const isoDateString = currentDate.toISOString()

type RecommendedPosts = Pick<ContentfulPostData, 'items'>

export default function HomeModel() {
    const [recommended, setRecommended] = useState<RecommendedPosts>()
    /*** stores ***/
    const { updatedAt, data } = useContentfulStoreHydrated()

    /*** queries ***/
    const { data: postResponseData, ...postResponse } = QueryPostEntries()

    /*** handlers ***/
    const handleContentfulDataStore = () => {
        const content = postResponseData?.data
        const updatedAt = isoDateString
        const payload = { updatedAt, data: content }
        postResponse.isSuccess && setContentfulData(payload)
        postResponse.isError && toast('Error fetching posts.')
    }

    const handlePostAssets = () => {
        console.clear()
        console.log(data.items)
    }

    /*** effects ***/
    useEffect(handleContentfulDataStore, [postResponseData])

    return {
        state: { posts: data.items },
        actions: {},
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>
