import { getNotionBlock, getNotionPage } from '@/work/service'

export async function GET(
    request: Request,
    { params }: { params: { uuid: string } }
) {
    const { data: page } = await getNotionPage(params.uuid)
    const { data: block } = await getNotionBlock(page.id)
    return Response.json({ page, block })
}
