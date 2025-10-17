export interface NotionResponse {
    data: NotionBlockType[]
}
export interface NotionBlockType {
    object: string
    id: string
    parent: BlockParent
    created_time: string
    last_edited_time: string
    created_by: BlockUser
    last_edited_by: BlockUser
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: 'paragraph' | 'heading_2' | 'code'
    paragraph?: BlockParagraph
    heading_2?: BlockHeading
    code?: BlockCode
}
interface BlockRichText {
    type: string
    text: {
        content: string
        link: string | null
    }
    annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
    }
    plain_text: string
    href: string | null
}
export interface BlockParagraph {
    rich_text: BlockRichText[]
    color: string
}

export interface BlockHeading {
    rich_text: BlockRichText[]
    is_toggleable: boolean
    color: string
}

export interface BlockCode {
    caption: BlockRichText[]
    rich_text: BlockRichText[]
    language: string
}

interface BlockParent {
    type: string
    page_id: string
}

interface BlockUser {
    object: string
    id: string
}

export type NotionContentType = {
    object: string
    id: string
    parent: {
        type: string
        page_id: string
    }
    created_time: string
    last_edited_time: string
    created_by: {
        object: string
        id: string
    }
    last_edited_by: {
        object: string
        id: string
    }
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: string
    child_page: {
        title: string
    }
    block?: NotionBlockType[]
}
