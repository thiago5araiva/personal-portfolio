import contentful from "@/_services/contentful";
import { WorkContent, WorkContentCollection } from "./types";

const { gql, client } = contentful();

export async function getWorkContentCollection(): Promise<WorkContentCollection> {
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
  `;
  return await client.request(query);
}

export async function getWorkContent(contentID: string): Promise<WorkContent> {
  const query = gql`
    query WorkContent($workContentId: String!) {
      workContent(id: $workContentId) {
        title
        createdAt
        type
        content {
          json
        }
      }
    }
  `;
  return await client.request(query, { workContentId: contentID });
}

/***-

content-nodes

- remover todo conteudo que nao tiver value nele
- [imagens] : "nodeType": "embedded-asset-block"
  "data": {
    "target": {
      "sys": {
      "id": "6BiGtXXEnpoPDceigUZlcz",
      "type": "Link",
      "linkType": "Asset"
      }
    }
  }
-***/
