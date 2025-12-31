export interface ContentfulPostData {
    sys: SysRoot
    total: number
    skip: number
    limit: number
    items: PostDataItem[]
}

export interface SysRoot {
    type: string
}

export interface PostDataItem {
    metadata: Metadata
    sys: SysItem
    fields: Fields
}

export interface Metadata {
    tags: Tag[]
    concepts: any[]
}

export interface Tag {
    sys: SysTag
}

export interface SysTag {
    type: string
    linkType: string
    id: string
}

export interface SysItem {
    space: Space
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: Environment
    publishedVersion: number
    revision: number
    contentType: ContentType
    locale: string
}

export interface Space {
    sys: Sys4
}

export interface Sys4 {
    type: string
    linkType: string
    id: string
}

export interface Environment {
    sys: Sys5
}

export interface Sys5 {
    id: string
    type: string
    linkType: string
}

export interface ContentType {
    sys: Sys6
}

export interface Sys6 {
    type: string
    linkType: string
    id: string
}

export interface Fields {
    name: string
    title: string
    description: string
    body: string
    slug: string
}
