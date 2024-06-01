import contentful from "@/_services/contentful/"
import { ContentfulWorkCollection } from "./types/ContentfulWorkCollection"
import { ContentfulWorkContent } from "./types/ContentfulWork"
import { ContentfulAsset } from "@/_services/contentful/types/contentfulAssets"

const { gql, client } = contentful()

export async function getWorkContentCollection(): Promise<ContentfulWorkCollection> {
  const query = gql`
    query WorkContentCollection {
      workContentCollection {
        items {
          sys {
            id
            publishedAt
          }
          title
          type
        }
      }
    }
  `
  return await client.request(query)
}
export async function getWorkContent(
  contentID: string
): Promise<ContentfulWorkContent> {
  const query = gql`
    query WorkContent($workContentId: String!) {
      workContent(id: $workContentId) {
        title
        createdAt
        type
        content {
          json
          links {
            assets {
              block {
                height
                width
                url
                title
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  `
  const body = { workContentId: contentID }
  return await client.request(query, body)
}

export async function getAssetsById(assetID: string): Promise<ContentfulAsset> {
  const query = gql`
    query Asset($assetId: String!) {
      asset(id: $assetId) {
        sys {
          id
        }
        title
        url
        width
        height
      }
    }
  `
  const body = { assetId: assetID }
  return await client.request(query, body)
}
