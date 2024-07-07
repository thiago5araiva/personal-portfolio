export type PageWorkType = {
  pageWork: {
    _id: string
    title: string
    subtitle: string
    contentCollection: {
      items: Array<{
        _id: string
        title: string
        createdAt: string
        type: string
      }>
    }
  }
}
