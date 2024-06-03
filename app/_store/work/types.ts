export type ContentfulWorkItem = {
  sys: {
    id: string
    publishedAt: string
  }
  title: string
  type: string
}

export interface ContentfulWorkCollection {
  workContentCollection: {
    items: Array<ContentfulWorkItem>
  }
}

export type ContentfulWorkContentNodeType =
  | "document"
  | "embedded-asset-block"
  | "heading-3"
  | "text"

export type ContentfulWorkContentValues = {
  nodeType: ContentfulWorkContentNodeType
  value: string
  marks: []
  data: {
    target: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
  }
  height?: number
  sys?: { id: string }
  title?: string
  url?: string
  width?: number
}

export type ContentfulWorkContentData = {
  nodeType: ContentfulWorkContentNodeType
  data: {
    target: {
      sys: {
        id: string
        type: string
        linkType: string
        url?: string
      }
    }
  }
  content: ContentfulWorkContentValues[]
}

export type ContentfulWorkContentDataImages = {
  sys: {
    id: string
  }
  height: number
  width: number
  url: string
  title: string
}

export interface ContentfulWorkContent {
  title: string
  createdAt: string
  type: string
  content: {
    json: {
      nodeType: string
      data: {}
      content: ContentfulWorkContentData[]
    }
    links: {
      assets: {
        block: ContentfulWorkContentDataImages[]
      }
    }
  }
}
