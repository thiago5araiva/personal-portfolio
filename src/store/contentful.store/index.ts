import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContentfulPostData } from '@/services/contentful/contentful.type'
import { useSyncExternalStore } from 'react'

interface InterfaceContentfulData {
	updatedAt: string
	data: ContentfulPostData
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
}

export function useHydration() {
	return useSyncExternalStore(
		(callback) => useContentfulStore.persist.onFinishHydration(callback),
		() => useContentfulStore.persist.hasHydrated(),
		() => false // Server-side, assume not hydrated
	)
}

const useContentfulStore = create<TContentfulStore>()(persist(() => initialState, { name: 'post-collection' }))

const { setState } = useContentfulStore

export function useContentfulStoreHydrated() {
	const isHydrated = useHydration()
	const store = useContentfulStore()
	return isHydrated ? store : { ...initialState }
}

export const setContentfulData = (payload: InterfaceContentfulData) => setState(payload)
