export type BlockByDateType = {
    object: string
    id: string
}

export type BlockRichText = {
    type: string
    text: {
        content: string
        link: null
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
    href: null
}
export type BlockParagraph = {
    rich_text?: BlockRichText[]
    color: string
}

export type BlockHeading = {
    rich_text?: BlockRichText[]
    is_toggleable?: boolean
    color: string
}

export type BlockCode = {
    caption: []
    rich_text: BlockRichText[]
    language: string
}

export interface BlockType {
    object: string
    id: string
    parent: {
        type: string
        page_id: string
    }
    created_time: string
    last_edited_time: string
    created_by: BlockByDateType
    last_edited_by: BlockByDateType
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: string
    paragraph: BlockParagraph
    heading_2: BlockHeading
    code: BlockCode
}
