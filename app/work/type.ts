export type TBlockParent = {
    type: string
    page_id: string
}
export type TBlockDated = {
    object: string
    id: string
}
export type TText = {
    content: string
    link: null
}
export type TAnnotations = {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}
export type TRichText = {
    type: string
    text: TText
    annotations: TAnnotations
    plain_text: string
    href: null
}
export type TParagraph = {
    rich_text: TRichText[]
    color: string
}

export interface IBlock {
    object: string
    id: string
    parent: TBlockParent
    created_time: string
    last_edited_time: string
    created_by: TBlockDated
    last_edited_by: TBlockDated
    has_children: boolean
    archived: boolean
    in_trash: boolean
    type: string
    paragraph: TParagraph
}
