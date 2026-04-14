import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContentfulPostData, PostDataItem } from '@/services/contentful/contentful.type'
import { useSyncExternalStore } from 'react'

interface InterfaceContentfulData {
	updatedAt: string
	data: ContentfulPostData
	following: string[]
	assets?: any[]
}
type TContentfulStore = InterfaceContentfulData

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

export function useHydration() {
	return useSyncExternalStore(
		(callback) => useContentfulStore.persist.onFinishHydration(callback),
		() => useContentfulStore.persist.hasHydrated(),
		() => false // Server-side, assume not hydrated
	)
}

const useContentfulStore = create<TContentfulStore>()(persist(() => initialState, { name: 'post-collection' }))

const { setState, getState } = useContentfulStore

export function useContentfulStoreHydrated() {
	const isHydrated = useHydration()
	const store = useContentfulStore()
	return isHydrated ? store : { ...initialState }
}

export const setContentfulData = (payload: InterfaceContentfulData) => {
	const followed = getState().following
	const items = payload?.data.items

	const fn = (i: PostDataItem) => followed?.includes(i.sys.id)
	const itemsMap = items.map((i) => (fn(i) ? { ...i, isFollow: true } : i))

	setState({ ...payload, data: { ...payload?.data, items: itemsMap } })
	return
}

export const unsetContentFollowing = (id: string) => {
	const { data, following } = getState()

	const updatedFollowing = following.filter((i) => i !== id)
	const updatedItems = data.items.map((i) => (i.sys.id === id ? { ...i, isFollow: false } : i))

	setState({
		...getState(),
		following: updatedFollowing,
		data: { ...data, items: updatedItems },
	})
}

export const setContentFollowing = (id: string) => {
	const { data, following } = getState()

	if (following.includes(id)) return unsetContentFollowing(id)

	const updatedItems = data.items.map((i) => (i.sys.id === id ? { ...i, isFollow: true } : i))

	setState({
		...getState(),
		following: [...following, id],
		data: { ...data, items: updatedItems },
	})
}

export default useContentfulStore
