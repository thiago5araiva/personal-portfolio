export interface ContentfulPostData {
    sys: SysRoot
    total: number
    skip: number
    limit: number
    items: PostDataItem[]
    includes?: ContentfulIncludes
}

export interface ContentfulIncludes {
    Asset?: ContentfulAsset[]
}

export interface SysRoot {
    type: string
}

export interface PostDataItem {
    isFollow?: boolean
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
    tag: string
    image?: AssetLink
}

export interface AssetLink {
    sys: {
        type: 'Link'
        linkType: 'Asset'
        id: string
    }
}

export interface ContentfulAsset {
    metadata: Metadata
    sys: AssetSys
    fields: AssetFields
}

export interface AssetSys {
    space: Space
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: Environment
    publishedVersion: number
    revision: number
    locale: string
}

export interface AssetFields {
    title: string
    description: string
    file: AssetFile
}

export interface AssetFile {
    url: string
    details: AssetFileDetails
    fileName: string
    contentType: string
}

export interface AssetFileDetails {
    size: number
    image?: AssetImageDimensions
}

export interface AssetImageDimensions {
    width: number
    height: number
}

export interface GetEntriesOptions {
    order?: string
    skip?: number
    limit?: number
}

export const PAGE_SIZE = 4
