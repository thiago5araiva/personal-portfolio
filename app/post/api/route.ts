import { notionRepository } from '@/services/notion/notion-repository'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, response: Response) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('id')
    const { data } = await notionRepository.getNotionContent(query)
    return Response.json({ data: data.results })
}
