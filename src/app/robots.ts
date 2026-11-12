import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { isPeritoHost, MAIN_SITE_URL, PERITO_SITE_URL } from '@/services/site/site-host'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = (await headers()).get('host')
    const siteUrl = isPeritoHost(host) ? PERITO_SITE_URL : MAIN_SITE_URL

    return {
        rules: { userAgent: '*', allow: '/', disallow: '/private/' },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    }
}
