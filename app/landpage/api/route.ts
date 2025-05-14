import { notionRepository } from '@/services/notion/notion-repository'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, response: Response) {
    const id = `1111ad1e91f88093bb17c6afd536e439`
    const { data } = await notionRepository.getNotionContent(id)
    return Response.json({ data: data.results })
}
