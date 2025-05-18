import { notionRepository } from '@/_services/notion/notion-repository'

export async function GET() {
    const id = `${process.env.NEXT_PAGE_ID_API}`
    const { data } = await notionRepository.getNotionContent(id)
    return Response.json({ data: data.results })
}
