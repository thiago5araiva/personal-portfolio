import { client, gql } from "@/_services/contentful";
import { PageWorkType } from "./types";

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
            _id
            title
            slug
            type
            createdAt
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
