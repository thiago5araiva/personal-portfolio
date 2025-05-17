import type Model from './post.model'

export interface NotionResponse {
    data: Block[]
}

export interface Block {
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
    type: 'paragraph' | 'heading_2' | 'code' // Added code type
    paragraph?: Paragraph
    heading_2?: Heading2
    code?: BlockCode // Added code property
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

// Added BlockCode interface from types.ts
export interface BlockCode {
    caption: RichText[]
    rich_text: RichText[]
    language: string
}

export type TypeModule = ReturnType<typeof Model>
