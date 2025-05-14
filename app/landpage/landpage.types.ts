import type Model from './landpage.model'

export type TypeModule = ReturnType<typeof Model>

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
}
