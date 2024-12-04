import { NotionHttpClient } from '@/services/notion/notion-http-client'
import { NotionRepository } from '@/services/notion/notion-repository'

const notionHttpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(notionHttpClient)

export async function GET(
    request: Request,
    { params }: { params: { uuid: string } }
) {
    const { data: page } = await notionRepository.getNotionPage(params.uuid)
    const { data: block } = await notionRepository.getNotionBlock(page.id)
    return Response.json({ page, block })
}
