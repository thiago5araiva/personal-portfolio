import 'server-only'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { viewsRepository } from '@/services/views/views-repository'
import type { ContentfulEntriesResponse, PostDataItem } from '@/services/contentful/contentful.type'
import type { TopSlugEntry } from '@/services/views/views.type'

const FEATURED_LIMIT = 3

export type FeaturedItem = { title: string; url: string }

export type PageData = {
	entries: ContentfulEntriesResponse
	featured: FeaturedItem[]
	renderedAt: string
}

const toFeatured = (items: PostDataItem[]): FeaturedItem[] => {
	return items.map((i) => ({
		title: i.fields.title,
		url: `/content/${i.fields.slug}`,
	}))
}
const resolveFeatured = (items: PostDataItem[], topSlugs: TopSlugEntry[]): FeaturedItem[] => {
	if (!items.length) return []

	const topPosts = topSlugs.map((entry) => items.find((i) => i.fields.slug === entry.slug)).filter((i): i is PostDataItem => Boolean(i))

	if (topPosts.length >= FEATURED_LIMIT) {
		return toFeatured(topPosts.slice(0, FEATURED_LIMIT))
	}

	const usedIds = new Set(topPosts.map((i) => i.sys.id))
	const fallback = items.filter((i) => !usedIds.has(i.sys.id) && i.fields.tag === 'frontend')

	return toFeatured([...topPosts, ...fallback].slice(0, FEATURED_LIMIT))
}

export async function getHomePageData(): Promise<PageData> {
	const [entries, topSlugs] = await Promise.all([
		contentfulRepository.getPostEntries(),
		viewsRepository.getTopSlugs(FEATURED_LIMIT).catch(() => []),
	])

	const featured = resolveFeatured(entries.data.items, topSlugs)

	return { entries, featured, renderedAt: new Date().toISOString() }
}
