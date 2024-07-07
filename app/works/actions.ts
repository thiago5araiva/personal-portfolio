'use client'
import { useQuery } from '@tanstack/react-query'
import { PageWorkType } from './types'
import { client, gql } from '@/_services/contentful'

const pageWorkId = 'J0A1P42S54bpVre9kvGH7'

export async function getPageWorkContent(): Promise<PageWorkType> {
  const query = gql`
    query PageWork($pageWorkId: String!) {
      pageWork(id: $pageWorkId) {
        _id
        title
        subtitle
        contentCollection {
          items {
            _id
            title
            createdAt
            type
          }
        }
      }
    }
  `
  return await client.request(query, { pageWorkId })
}
