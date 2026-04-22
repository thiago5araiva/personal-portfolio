import 'server-only'
import { unstable_cache } from 'next/cache'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { viewsRepository } from '@/services/views/views-repository'
import type { ContentfulEntriesResponse, PostDataItem } from '@/services/contentful/contentful.type'
import type { TopSlugEntry } from '@/services/views/views.type'

const FEATURED_LIMIT = 6

export type FeaturedItem = { title: string; url: string; count?: number }

export type PageData = {
	entries: ContentfulEntriesResponse
	featured: FeaturedItem[]
	renderedAt: string
}

type RankedItem = { item: PostDataItem; count?: number }

const getTopSlugsCached = unstable_cache(
	() => viewsRepository.getTopSlugs(FEATURED_LIMIT),
	['views:top-slugs', String(FEATURED_LIMIT)],
	{ revalidate: 60, tags: ['views:ranking'] }
)

const toFeatured = (ranked: RankedItem[]): FeaturedItem[] => {
	return ranked.map(({ item, count }) => ({
		title: item.fields.title,
		url: `/content/${item.fields.slug}`,
		count,
	}))
}

const resolveFeatured = (items: PostDataItem[], topSlugs: TopSlugEntry[]): FeaturedItem[] => {
	if (!items.length) return []

	const topPosts: RankedItem[] = topSlugs
		.map((entry) => {
			const item = items.find((i) => i.fields.slug === entry.slug)
			return item ? { item, count: entry.count } : null
		})
		.filter((v): v is RankedItem => Boolean(v))

	if (topPosts.length >= FEATURED_LIMIT) {
		return toFeatured(topPosts.slice(0, FEATURED_LIMIT))
	}

	const usedIds = new Set(topPosts.map(({ item }) => item.sys.id))
	const fallback: RankedItem[] = items
		.filter((i) => !usedIds.has(i.sys.id) && i.fields.tag === 'frontend')
		.map((item) => ({ item, count: undefined }))

	return toFeatured([...topPosts, ...fallback].slice(0, FEATURED_LIMIT))
}

export async function getHomePageData(): Promise<PageData> {
	const [entries, topSlugs] = await Promise.all([
		contentfulRepository.getPostEntries(),
		getTopSlugsCached().catch(() => [] as TopSlugEntry[]),
	])

	const featured = resolveFeatured(entries.data.items, topSlugs)

	return { entries, featured, renderedAt: new Date().toISOString() }
}
