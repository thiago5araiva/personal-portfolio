import notion, { BASE_URL } from '@/services/notion'

export async function getNotionBlocks(id: string) {
    const url = `${BASE_URL}/blocks/${id}/children?page_size=100`
    return await notion.get(url)
}

export async function getNotionPage(id: string) {
    const url = `${BASE_URL}/pages/${id}`
    return await notion.get(url)
}

export async function getNotionContent(url: string) {
    return await notion.get(url)
}
