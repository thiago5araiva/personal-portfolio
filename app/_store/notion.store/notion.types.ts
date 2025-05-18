export interface NotionBlockType {
    object: string
    id: string
    parent: Parent
    created_time: string
    last_edited_time: string
    created_by: User
    last_edited_by: User
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: 'paragraph' | 'heading_2' // Add other block types as needed
    paragraph?: Paragraph
    heading_2?: Heading2
}

interface Parent {
    type: string
    page_id: string
}

interface User {
    object: string
    id: string
}

interface RichText {
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

interface Paragraph {
    rich_text: RichText[]
    color: string
}

interface Heading2 {
    rich_text: RichText[]
    is_toggleable: boolean
    color: string
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
