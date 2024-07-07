'use client'
import { useQuery } from '@tanstack/react-query'
import { PageWorkType } from './types'
import { client, gql } from '@/_services/contentful'

const pageWorkId = 'J0A1P42S54bpVre9kvGH7'

export async function getPageWorkContent(): Promise<PageWorkType> {
  const query = gql`
    query PageWork($pageWorkId: String!) {
      pageWork(id: $pageWorkId) {
        title
        subtitle
        contentCollection {
          items {
            sys {
              id
            }
            title
            type
          }
        }
      }
    }
  `
  return await client.request(query, { pageWorkId })
}
