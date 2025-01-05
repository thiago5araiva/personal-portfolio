import { notionRepository } from '@/_services/notion/notion-repository'

export async function GET(
    request: Request,
    response: Response,
    params: { id: string }
) {
    const { data } = await notionRepository.getNotionContent(params?.id)
    return Response.json({ data })
}
