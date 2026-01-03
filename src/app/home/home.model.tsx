import { QueryPostEntries } from '@/services/contentful/contentful-query'
import {
    setContentfulData,
    useContentfulStoreHydrated,
} from '@/store/contentful.store'
import { useEffect } from 'react'
import { ContentfulPostData } from '@/store/contentful.store/contentful.type'
import { toast } from 'sonner'

const currentDate = new Date()
const isoDateString = currentDate.toISOString()

type PostData = Pick<ContentfulPostData, 'items'>

export default function HomeModel() {
    const contentFulStore = useContentfulStoreHydrated()

    const { data: postResponseData, ...postResponse } = QueryPostEntries()

    const recommended = contentFulStore?.data.items
    const following = recommended.filter((i) => i.isFollow)

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
        },
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>
