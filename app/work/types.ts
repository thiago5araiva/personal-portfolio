type DueDate = {
    id: string
    type: string
    date: {
        start: string
        end: null
        time_zone: null
    }
}
type Status = {
    id: string
    type: string
    status: {
        id: string
        name: string
        color: string
    }
}
type Title = {
    id: string
    type: string
    title: RichText[]
}
type Text = {
    content: string
    link: null
}
type Annotations = {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}
type RichText = {
    type: string
    text: Text
    annotations: Annotations
    plain_text: string
    href: null | string
}
type Properties = {
    'Due date': DueDate
    Status: Status
    title: Title
}
type Create = {
    object: string
    id: string
}
type Icon = {
    type: string
    emoji: string
}
type Parent = {
    type: string
    page_id?: string
    database_id?: string
}
export interface Page {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: Create
    last_edited_by: Create
    cover: null
    icon: Icon
    parent: Parent
    archived: boolean
    in_trash: boolean
    properties: Properties
    url: string
    public_url: string
}

type Types = 'heading_2' | 'paragraph' | 'child_page'

export type HeadingType = {
    id: string
    type: string
    created_time: string
    is_toggleable: false
    rich_text: RichText[]
    color: string
}
export type ParagraphType = {
    id: string
    type: string
    created_time: string
    rich_text: RichText[]
}

export type ImageType = {
    id: string
    type: string
    created_time: string
    content: {
        caption: []
        type: string
        file: {
            url: string
            expiry_time: string
        }
    }
}

type Child = {
    id: string
    type: string
    created_time: string
    title: string
}

export type Content = HeadingType | ParagraphType | Child | ImageType

export type Results = {
    object: string
    id: string
    parent: Parent
    created_time: string
    last_edited_time: string
    created_by: Create
    last_edited_by: Create
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: Types
    content: Content
}

export interface Block {
    object: string
    results: Results[]
    next_cursor: string | null
    has_more: boolean
    type: string
    block: {}
    request_id: string
}
