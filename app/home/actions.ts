import contentful from "@/_services/contentful"
import { PageHomeType } from "./types"

const { client, gql } = contentful()

const pageHomeId = "5T4EdbAY29aKcTgCLHwt24"

export async function getPageHomeContent(): Promise<PageHomeType> {
  const query = gql`
    query PageHome($pageHomeId: String!) {
      pageHome(id: $pageHomeId) {
        _id
        sectionHero {
          _id
          title
          description
          cta
          assetsCollection {
            items {
              url
              title
              width
              height
            }
          }
        }
        sectionWork {
          _id
          title
          contentCollection {
            items {
              _id
              title
              createdAt
              type
            }
          }
        }
        sectionService {
          _id
          title
          contentCollection {
            items {
              _id
              title
              description
            }
          }
          assetsCollection {
            items {
              title
              url
              width
              height
            }
          }
        }
      }
    }
  `
  return await client.request(query, { pageHomeId })
}
