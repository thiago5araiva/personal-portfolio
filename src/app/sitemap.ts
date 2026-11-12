import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { PostDataItem } from '@/services/contentful/contentful.type'
import { isPeritoHost, MAIN_SITE_URL, PERITO_SITE_URL } from '@/services/site/site-host'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const host = (await headers()).get('host')

    if (isPeritoHost(host)) {
        return [{ url: PERITO_SITE_URL, changeFrequency: 'monthly', priority: 1 }]
    }

    const response = await contentfulRepository.getPostEntries()
    const items: PostDataItem[] = response?.data?.items ?? []

    return [
        { url: MAIN_SITE_URL, changeFrequency: 'weekly', priority: 1 },
        { url: `${MAIN_SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
        ...items.map((item) => ({
            url: `${MAIN_SITE_URL}/content/${item.fields.slug}`,
            lastModified: item.sys.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ]
}
