import { client, gql } from "@/_services/contentful";
import { PageWordContent, PageWorkType, WorkContentType } from "./types";

const pageWorkId = "6dEjU3iWDzaLKMS2hVS3Fq";

export async function getPageWorkContent(): Promise<PageWorkType> {
  const query = gql`
    query Query($pageWorkId: String!) {
      pageWork(id: $pageWorkId) {
        sys {
          id
        }
        contentCollection {
          items {
            sys {
              id
            }
            title
            slug
            type
            createdAt
            stack
            embed
            content {
              json
            }
          }
        }
      }
    }
  `;
  return await client.request(query, { pageWorkId });
}

export async function getWorkContentById(id: string): Promise<PageWordContent> {
  const query = gql`
    query WorkContent($workContentId: String!) {
      workContent(id: $workContentId) {
        sys {
          id
        }
        content {
          json
          links {
            assets {
              block {
                url
                width
                height
                title
                sys {
                  id
                }
              }
            }
          }
        }
        title
        slug
        type
        stack
        createdAt
        embed
      }
    }
  `;
  return await client.request(query, { workContentId: id });
}
