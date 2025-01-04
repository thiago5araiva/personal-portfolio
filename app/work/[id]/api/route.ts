import { notionRepository } from '@/_services/notion/notion-repository'

export async function GET(
    request: Request,
    response: Response,
    params: { id: string }
) {
    const { data } = await notionRepository.getNotionContent(
        `88811f55-c0a2-4994-829f-4ea0205709a5`
    )
    return Response.json({ data: data.results })
}
