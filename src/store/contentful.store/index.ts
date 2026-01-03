import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
    ContentfulPostData,
    PostDataItem,
} from '@/store/contentful.store/contentful.type'
import { useSyncExternalStore } from 'react'

interface InterfaceContentfulData {
    updatedAt: string
    data: ContentfulPostData
    following: string[]
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
    },
    following: [],
    assets: [],
}

type TContentfulStore = InterfaceContentfulData
const useContentfulStore = create<TContentfulStore>()(
    persist(() => initialState, { name: 'post-collection' })
)

export function useHydration() {
    return useSyncExternalStore(
        (callback) => useContentfulStore.persist.onFinishHydration(callback),
        () => useContentfulStore.persist.hasHydrated(),
        () => false // Server-side, assume not hydrated
    )
}

export function useContentfulStoreHydrated() {
    const isHydrated = useHydration()
    const store = useContentfulStore()
    return isHydrated ? store : { ...initialState }
}

const { setState, getState } = useContentfulStore

/*** contentful-store***/
export const getContentfulStore = () => getState()

export const resetContentfulStore = () => setState({ ...initialState })

export const setContentfulData = (payload: InterfaceContentfulData) => {
    const followed = getState().following
    const items = payload?.data.items

    const fn = (i: PostDataItem) => followed?.includes(i.sys.id)
    const itemsMap = items.map((i) => (fn(i) ? { ...i, isFollow: true } : i))

    setState({ ...payload, data: { ...payload?.data, items: itemsMap } })
    return
}

export const setContentfulAssets = (payload: any[]) => {
    setState({ ...getState(), assets: payload })
    return
}

export const unsetContentFollowing = (id: string) => {
    const { data, following } = getState()

    const followingFilter = following.filter((i) => i !== id)

    const recommended = data?.items
    const recommendedIndex = recommended.findIndex((i) => i.sys.id === id)
    recommended[recommendedIndex].isFollow = false

    setState({ ...getState(), data: { ...data, items: recommended } })
    setState({ ...getState(), following: followingFilter })

    return
}

export const setContentFollowing = (id: string) => {
    const { data, following } = getState()

    const isFollowed = following.includes(id)

    if (isFollowed) return unsetContentFollowing(id)

    const recommended = data?.items
    const recommendedIndex = recommended.findIndex((i) => i.sys.id === id)
    recommended[recommendedIndex].isFollow = true

    setState({ ...getState(), following: [...following, id] })
    setState({ ...getState(), data: { ...data, items: recommended } })

    return
}

export default useContentfulStore
