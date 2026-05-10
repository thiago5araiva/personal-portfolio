import { setContentfulData, useContentfulStoreHydrated } from '@/store/contentful.store'
import { useEffect } from 'react'
import { ContentfulIncludes, PostDataItem } from '@/services/contentful/contentful.type'
import type { PageData } from './Server'

export default function Model(initialData?: PageData) {
	const contentFulStore = useContentfulStoreHydrated()

	const initialPayload = initialData?.entries.data
	const recommended: PostDataItem[] = initialPayload?.items ?? contentFulStore?.data.items ?? []
	const includes: ContentfulIncludes = initialPayload?.includes ?? contentFulStore?.data.includes ?? { Asset: [] }
	const featured = initialData?.featured ?? []
	const renderedAt = initialData?.renderedAt ?? ''

	const handleContentfulDataStore = () => {
		if (!initialPayload?.items?.length) return
		setContentfulData({
			...contentFulStore,
			updatedAt: new Date().toISOString(),
			data: { ...initialPayload },
		})
	}

	useEffect(handleContentfulDataStore, [initialData])

	return {
		state: {
			recommended,
			featured,
			includes,
			renderedAt,
		},
	}
}

export type TypeHomeModel = ReturnType<typeof Model>
