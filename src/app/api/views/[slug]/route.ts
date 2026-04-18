import { geolocation } from '@vercel/functions'
import { viewsRepository } from '@/services/views/views-repository'

type Params = { params: Promise<{ slug: string }> }

const BOT_REGEX = /bot|crawl|spider|slurp|headless|fetch|http-client/i

export async function POST(request: Request, { params }: Params) {
    const { slug } = await params

    if (!slug) {
        return Response.json({ error: 'slug required' }, { status: 400 })
    }

    if (process.env.VERCEL_ENV !== 'production') {
        return Response.json({ ok: true, skipped: 'non-production' })
    }

    const userAgent = request.headers.get('user-agent') ?? ''
    if (BOT_REGEX.test(userAgent)) {
        return Response.json({ ok: true, skipped: 'bot' })
    }

    const { country = 'UNKNOWN' } = geolocation(request)

    await viewsRepository.registerView({ slug, country })

    return Response.json({ ok: true })
}

export async function GET(_request: Request, { params }: Params) {
    const { slug } = await params
    const countries = await viewsRepository.getCountriesForSlug(slug)
    return Response.json({ slug, countries })
}
