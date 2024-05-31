import contentful from "@/_services/contentful";
import {
  ContentfulContentWork,
  ContentfulWorkContent,
  LocalContentWork,
  WorkContent,
  WorkContentCollection,
  WorkContentItem,
} from "./types";

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

export async function getWorkContent(
  contentID: string,
): Promise<LocalContentWork> {
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
  const body = { workContentId: contentID };
  const res: WorkContent = await client.request(query, body);

  const { workContent } = res;

  const result: LocalContentWork = {
    ...workContent,
    content: workContent.content.json.content,
  };

  console.log(result);

  // setTitle(workContent.title);
  // setSubTitle(workContent.createdAt);
  // setContent(workContent.content.json.content);

  return result;
}

export async function getAssetsById(assetID: string) {
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
  `;
  return await client.request(query, { assetId: assetID });
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
