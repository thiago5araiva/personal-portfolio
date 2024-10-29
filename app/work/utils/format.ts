import { Block, Content, Page } from '../types'

export function contentPage(page: Page) {
    return {
        id: '1111ad1e-91f8-8093-bb17-c6afd536e439',
        created_time: '2024-09-30T19:10:00.000Z',
        title: page?.properties.title.title[0].plain_text,
    }
}
export type ContentBlockType = {
    id: string
    type: string
    created_time: string
    content: Content
}
export function contentBlock(block: Block): ContentBlockType[] {
    const { results } = block
    return results.map((item: any) => ({
        id: item.id,
        type: item.type,
        created_time: item.created_time,
        content: item[item.type],
    }))
}

// export function formatSingleContentBlock() {}
// export function formatContentBlocks() {}
