export type FooterType = {
  componentFooter: {
    _id: string
    text: string
    email: string
    linkCollection: {
      items: Array<{
        label: string
        url: string
        _id: string
      }>
    }
    copyright: string
    poweredBy: string[]
  }
}
