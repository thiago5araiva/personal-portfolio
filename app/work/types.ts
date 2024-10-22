export type ContentWorkType = {
    nodeType: string
    data: {}
    content: [
        {
            nodeType: string
            value: string
            marks: []
            data: {}
        },
    ]
}
export type WorkContentType = {
    sys: {
        id: string
    }
    title: string
    type: string
    slug: string
    createdAt: string
    stack: Array<string>
    embed: string
    content: {
        json: {
            nodeType: 'document'
            data: {}
            content: Array<ContentWorkType>
        }
        links: {
            assets: {
                block: Array<{
                    url: string
                    width: number
                    height: number
                    title: string
                    sys: {
                        id: string
                    }
                }>
            }
        }
    }
}
export type WorkContentCollectionType = {
    items: Array<WorkContentType>
}
export type PageWorkType = {
    pageWork?: {
        sys: {
            id: string
        }
        contentCollection?: WorkContentCollectionType
    }
}
export type PageWordContent = {
    workContent: WorkContentType
}

// NOTION
export type INotionPropertyTitle = {
    type: 'text'
    text: {
        content: 'Living with JSX'
        link: null
    }
    annotations: {
        bold: false
        italic: false
        strikethrough: false
        underline: false
        code: false
        color: 'default'
    }
    plain_text: 'Living with JSX'
    href: null
}
export type INotionPageProperties = {
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
        title: INotionPropertyTitle[]
    }
}
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
    properties: INotionPageProperties
    url: string
    public_url: string
}

export interface INotionBlockResults {
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

export interface INotionBlock {
    object: string
    results: INotionBlockResults[]
    next_cursor: null
    has_more: boolean
    type: string
    block: {}
    request_id: string
}
