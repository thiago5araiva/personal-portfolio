import { GraphQLClient, gql } from 'graphql-request'
import { IGraphQLClient } from '@/services/graphql-client.interface'

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const HOST = process.env.NEXT_PUBLIC_CONTENTFUL_HOST
const ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT

export const CONTENTFUL_ENDPOINT = `${HOST}/${SPACE_ID}/environments/${ENVIRONMENT}`
const client = new GraphQLClient(CONTENTFUL_ENDPOINT, {
    headers: () => ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }),
})
export { client, gql }

export class ContentfulClient {
    private GraphQLClientInstance: GraphQLClient
    private query: typeof gql
    constructor() {
        this.query = gql
        this.GraphQLClientInstance = new GraphQLClient(CONTENTFUL_ENDPOINT, {
            headers: () => ({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }),
        })
    }
}
