import 'server-only'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import type { ContentfulEntriesResponse, PostDataItem } from '@/services/contentful/contentful.type'

const FEATURED_LIMIT = 6

export type FeaturedItem = { title: string; url: string }

export type PageData = {
	entries: ContentfulEntriesResponse
	featured: FeaturedItem[]
	renderedAt: string
}

const toFeatured = (items: PostDataItem[]): FeaturedItem[] => {
	return items.map((item) => ({
		title: item.fields.title,
		url: `/content/${item.fields.slug}`,
	}))
}

export async function getHomePageData(): Promise<PageData> {
	const entries = await contentfulRepository.getPostEntries()

	const featured = toFeatured(
		entries.data.items.filter((i) => i.fields.tag === 'frontend').slice(0, FEATURED_LIMIT)
	)

	return { entries, featured, renderedAt: new Date().toISOString() }
}
