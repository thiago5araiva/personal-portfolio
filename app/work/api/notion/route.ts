import notion, { BASE_URL } from '@/services/notion'
import { INotionBlock, INotionPage } from '@/work/api/notion/types'

type TGetNotionPage = { data: INotionPage }

const PAGE_ID = `${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}`

export async function getNotionBlocks(id: string) {
    const url = `${BASE_URL}/blocks/${id}/children?page_size=100`
    return await notion.get(url)
}

export async function getNotionPage(id: string) {
    const url = `${BASE_URL}/pages/${id}`
    return await notion.get(url)
}

export async function GET(
    request: Request,
    response: Response
): Promise<{ page: INotionPage; block: INotionBlock }> {
    const { data: page } = await getNotionPage(PAGE_ID)
    const { data: block } = await getNotionBlocks(page.id)

    return Response.json({ page, block })
}
