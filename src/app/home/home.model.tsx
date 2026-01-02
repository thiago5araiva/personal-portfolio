import { QueryPostEntries } from '@/services/contentful/contentful-query'
import {
    setContentFollowing,
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
    const { updatedAt, data } = useContentfulStoreHydrated()

    const { data: postResponseData, ...postResponse } = QueryPostEntries()

    const recommended = data.items
    const following = data.items.filter((i) => i.follow === true)

    const handleContentfulDataStore = () => {
        const content = postResponseData?.data
        const updatedAt = isoDateString
        const payload = { updatedAt, data: content }
        postResponse.isSuccess && setContentfulData(payload)
        postResponse.isError && toast('Error fetching posts.')
    }
    const handleContentFollowing = (id = '') => setContentFollowing(id)

    useEffect(handleContentfulDataStore, [postResponseData])

    return {
        state: {
            recommended,
            following,
        },
        actions: { handleContentFollowing },
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>
