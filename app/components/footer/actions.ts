import { client, gql } from '@/services/contentful'
import { FooterType } from './types'

export const getGlobalFooter = async (): Promise<FooterType> => {
    const query = gql`
        query ComponentFooter($componentFooterId: String!) {
            componentFooter(id: $componentFooterId) {
                text
                email
                linkCollection {
                    items {
                        label
                        url
                    }
                }
                copyright
                poweredBy
            }
        }
    `
    return await client.request(query, {
        componentFooterId: '2VD03T7wdQAj9he83Dufkd',
    })
}
