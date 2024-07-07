import { client, gql } from '@/_services/contentful'

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
  }
}

const query = gql`
  query ComponentFooter($componentFooterId: String!) {
    componentFooter(id: $componentFooterId) {
      _id
      text
      email
      linkCollection {
        items {
          _id
          label
          url
        }
      }
      copyright
    }
  }
`

export const getGlobalFooter = async (): Promise<FooterType> =>
  await client.request(query, {
    componentFooterId: '2VD03T7wdQAj9he83Dufkd',
  })
