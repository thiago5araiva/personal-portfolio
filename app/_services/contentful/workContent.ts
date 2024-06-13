import { ContentfulWorkCollection } from "./types/ContentfulWorkCollection"
import contentful from "."

const { client, gql } = contentful()

type ContentCollectionType = { limit: number; order: "createdAt_DESC" | string }

export async function getWorkContentCollection(
  queryParams: ContentCollectionType
): Promise<ContentfulWorkCollection> {
  const { limit, order } = queryParams
  const query = gql`
    query WorkContentCollection($limit: Int, $order: [WorkContentOrder]) {
      workContentCollection(limit: $limit, order: $order) {
        items {
          sys {
            id
            publishedAt
          }
          title
        }
      }
    }
  `
  return await client.request(query, { limit, order })
}
