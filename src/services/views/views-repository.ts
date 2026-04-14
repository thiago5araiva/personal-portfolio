import { Redis } from '@upstash/redis'
import type {
    CountryBreakdown,
    TopSlugEntry,
    ViewsPingInput,
} from '@/services/views/views.type'

const RANKING_KEY = 'views:ranking'
const COUNTRIES_KEY = 'views:countries'
const byCountryKey = (slug: string) => `views:by-country:${slug}`

const redis = Redis.fromEnv()

export class ViewsRepository {
    async registerView({ slug, country }: ViewsPingInput): Promise<void> {
        await Promise.all([
            redis.zincrby(RANKING_KEY, 1, slug),
            redis.hincrby(byCountryKey(slug), country, 1),
            redis.hincrby(COUNTRIES_KEY, country, 1),
        ])
    }

    async getTopSlugs(limit = 5): Promise<TopSlugEntry[]> {
        const entries = (await redis.zrange(RANKING_KEY, 0, limit - 1, {
            rev: true,
            withScores: true,
        })) as (string | number)[]

        const result: TopSlugEntry[] = []
        for (let i = 0; i < entries.length; i += 2) {
            result.push({
                slug: String(entries[i]),
                count: Number(entries[i + 1]),
            })
        }
        return result
    }

    async getCountriesForSlug(slug: string): Promise<CountryBreakdown> {
        return (
            (await redis.hgetall<CountryBreakdown>(byCountryKey(slug))) ?? {}
        )
    }

    async getCountries(): Promise<CountryBreakdown> {
        return (await redis.hgetall<CountryBreakdown>(COUNTRIES_KEY)) ?? {}
    }
}

export const viewsRepository = new ViewsRepository()
