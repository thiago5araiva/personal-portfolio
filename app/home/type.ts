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

export type ContentHome = {
    components: {
        hero: {
            title: string
            description: string
            action: {
                label: string
                url: string
            }
        }
        infiniteScroll: Array<{
            image: string
            alt: string
        }>
        section: [
            {
                id: string
                title: string
                content: NotionContentType[]
            },
            {
                id: string
                title: string
                content: Array<{
                    title: string
                    description: string
                }>
            },
        ]
    }
}
