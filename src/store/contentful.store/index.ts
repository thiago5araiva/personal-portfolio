import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContentfulPostData } from '@/store/contentful.store/contentful.type'
import { useEffect, useState } from 'react'

interface InterfaceContentfulData {
    updatedAt: string
    data: ContentfulPostData
    assets?: any[]
}

const initialState: InterfaceContentfulData = {
    updatedAt: '',
    data: {
        sys: {
            type: '',
        },
        total: 0,
        skip: 0,
        limit: 0,
        items: [],
        following: [],
    },
    assets: [],
}

type TContentfulStore = InterfaceContentfulData
const useContentfulStore = create<TContentfulStore>()(
    persist(() => initialState, { name: 'post-collection' })
)

// Hook hydration-safe para evitar mismatch entre SSR e cliente
export function useContentfulStoreHydrated() {
    const [hydrated, setHydrated] = useState(false)
    const store = useContentfulStore()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: marks store as hydrated after client mount
        setHydrated(true)
    }, [])
    return hydrated ? store : initialState
}

const { setState, getState } = useContentfulStore

/*** contentful-store***/

export const getContentfulStore = () => getState()
export const resetContentfulStore = () => setState(initialState)

/*** contentful-data***/
export const setContentfulData = (payload: TContentfulStore) => {
    setState({ ...payload })
    return
}
export const setContentfulAssets = (payload: any[]) => {
    setState({ ...getState(), assets: payload })
    return
}

export const setContentFollowing = (payload: string) => {
    const { data } = getState()
    const recommendedData = [...data?.items]
    const recommendedIndex = data.items?.findIndex((i) => i.sys.id === payload)
    const recommendItem = data.items?.[recommendedIndex]

    const isFollow = !!recommendItem?.follow
    recommendedData[recommendedIndex] = { ...recommendItem, follow: !isFollow }
    setState({ ...getState(), data: { ...data, items: recommendedData } })
    return
}

export default useContentfulStore
