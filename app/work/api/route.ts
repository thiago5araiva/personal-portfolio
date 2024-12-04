import { NotionHttpClient } from '@/services/notion/notion-http-client'
import { NotionRepository } from '@/services/notion/notion-repository'
import { PAGE_ID } from '../constants'

const notionHttpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(notionHttpClient)

export async function GET(request: Request, response: Response) {
    const { data: page } = await notionRepository.getNotionPage(PAGE_ID)
    const { data: block } = await notionRepository.getNotionBlock(page.id)
    return Response.json({ page, block })
}
