import { INotionBlock, INotionPage } from '../types'

export function formatContentPage(page: INotionPage) {
    if (!page) return
    const { properties } = page
    const { title: property } = properties.title
    const [title] = property
    const { plain_text, href, annotations } = title
    return {
        id: page.id,
        title: plain_text,
        href,
        annotations,
        createdAt: page.created_time,
    }
}

export function formatSingleContentBlock(block: any) {}

export function formatContentBlocks(block: INotionBlock) {
    if (!block) return
    const { results } = block
    console.clear()
    console.log('block', results[0])
}

const singleBlock = {
    id: '1241ad1e-91f8-80e3-af1c-d55e73525f58',
    parent: '1231ad1e-91f8-8087-9fff-c2ffabf66651',
    created_time: '2024-10-19T13:14:00.000Z',
    type: 'paragraph',
    paragraph: {
        rich_text: {
            annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
            },
            plain_text: 'JSX is quite straightforward',
            href: null,
        },
    },
}
