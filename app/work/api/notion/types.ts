export interface INotionPage {
    object: string
    id: string
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
    cover: null
    icon: {
        type: string
        emoji: string
    }
    parent: {
        type: string
        database_id: string
    }
    archived: boolean
    in_trash: boolean
    properties: {
        'Due date': {
            id: string
            type: string
            date: {
                start: string
                end: null
                time_zone: null
            }
        }
        Status: {
            id: string
            type: string
            status: {
                id: string
                name: string
                color: string
            }
        }
        title: {
            id: string
            type: string
            title: [
                {
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
                },
            ]
        }
    }
    url: string
    public_url: string
}

export interface INotionBlock {
    object: string
    id: string
    child_page: {
        title: string
    }
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
    paragraph: {
        rich_text: [
            {
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
            },
        ]
        color: string
    }
}
