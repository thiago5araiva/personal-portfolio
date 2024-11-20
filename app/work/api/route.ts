import { getNotionBlock, getNotionPage } from '@/work/service'
import { PAGE_ID } from '../constants'

export async function GET(request: Request, response: Response) {
    const { data: page } = await getNotionPage(PAGE_ID)
    const { data: block } = await getNotionBlock(page.id)
    return Response.json({ page, block })
}
