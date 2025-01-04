import { notionRepository } from '@/_services/notion/notion-repository'
import { NotionContentType } from './type'

export async function GET(request: Request, response: Response) {
    const id = `1111ad1e91f88093bb17c6afd536e439`
    const { data } = await notionRepository.getNotionContent(id)
    return Response.json({ data: data.results })
}
