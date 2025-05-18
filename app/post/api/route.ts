import { notionRepository } from '@/_services/notion/notion-repository'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('id')
    const { data } = await notionRepository.getNotionContent(query)
    return Response.json({ data: data.results })
}
