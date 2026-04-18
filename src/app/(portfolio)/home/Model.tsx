import { setContentfulData, useContentfulStoreHydrated } from '@/store/contentful.store'
import { useEffect, useState } from 'react'
import { ContentfulIncludes, PostDataItem } from '@/services/contentful/contentful.type'
import type { PageData } from './Server'

function handleFollowingItems(posts: PostDataItem[], followingIds: string[]) {
	return posts?.filter((i) => i.isFollow || followingIds.includes(i.sys.id))
}
type TabValueProps = 'following' | 'recommended'

export default function Model(initialData?: PageData) {
	const [activeContentTab, setActiveContentTab] = useState<TabValueProps>('recommended')
	const contentFulStore = useContentfulStoreHydrated()

	const initialPayload = initialData?.entries.data
	const recommended: PostDataItem[] = initialPayload?.items ?? contentFulStore?.data.items ?? []
	const includes: ContentfulIncludes = initialPayload?.includes ?? contentFulStore?.data.includes ?? { Asset: [] }
	const followingIds = contentFulStore?.following ?? []
	const following = handleFollowingItems(recommended, followingIds)
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

	const handleContentTab = (value = '') => setActiveContentTab(value as TabValueProps)
	const contentTabType = activeContentTab === 'recommended' ? recommended : following

	useEffect(handleContentfulDataStore, [initialData])

	return {
		state: {
			recommended,
			following,
			featured,
			includes,
			activeContentTab,
			contentTabType,
			renderedAt,
		},
		action: { handleContentTab },
	}
}

export type TypeHomeModel = ReturnType<typeof Model>
