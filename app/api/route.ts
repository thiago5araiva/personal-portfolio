import { notionRepository } from '@/services/notion/notion-repository'
import { NotionContentType } from './type'

export const id = `1111ad1e91f88093bb17c6afd536e439`

export async function GET(request: Request, response: Response) {
    const { data } = await notionRepository.getNotionBlock(id)
    return Response.json({ data: data.results })
}

export async function getContent(): Promise<{ data: NotionContentType[] }> {
    const response = await fetch('api')
    return response.json()
}
