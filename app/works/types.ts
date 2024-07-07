export type PageWorkType = {
  pageWork: {
    _id: string
    title: string
    subtitle: string
    contentCollection: {
      items: Array<{
        sys: {
          id: string
        }
        title: string
        createdAt: string
        type: string
      }>
    }
  }
}
