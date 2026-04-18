export type TopSlugEntry = { slug: string; count: number }

export type CountryBreakdown = Record<string, number>

export type ViewsPingInput = {
    slug: string
    country: string
}
