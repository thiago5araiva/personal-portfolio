import ContentfulQuery from '@/services/contentful/contentful-query'
import { getContentfulData, setContentfulData } from '@/store/contentful.store'
import { useEffect } from 'react'

const currentDate = new Date()
const isoDateString = currentDate.toISOString()

export default function HomeModel() {
    /*** stores ***/
    const { updatedAt, data } = getContentfulData()

    /*** queries ***/
    const { query } = ContentfulQuery()
    const { data: postEntries } = query.postEntries

    /*** handlers ***/
    const handleContentfulDataStore = () => {
        const payload = { updatedAt: isoDateString, data: postEntries?.data }
        /*** update once a day ***/
        if (updatedAt === isoDateString) return
        postEntries && setContentfulData(payload)
    }

    /*** effects ***/
    useEffect(handleContentfulDataStore, [postEntries])

    return {
        state: { posts: data.items },
        actions: {},
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>
