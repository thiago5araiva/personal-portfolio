import { notionRepository } from '@/services/notion/notion-repository'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, response: Response) {
    const id = `${process.env.NEXT_PAGE_ID_API}`
    const { data } = await notionRepository.getNotionContent(id)
    return Response.json({ data: data.results })
}
