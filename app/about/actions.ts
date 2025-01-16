import { client, gql } from '@/_services/contentful'
import { AboutPageType } from './types'

export async function getPageAboutContent(): Promise<AboutPageType> {
    const query = gql`
        query Query($pageAboutId: String!) {
            pageAbout(id: $pageAboutId) {
                title
                subtitle
                cta
                file {
                    url
                }
                content {
                    json
                    links {
                        assets {
                            block {
                                title
                                url
                                width
                                height
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
    return await client.request(query, {
        pageAboutId: '27wBtHLCJIHmGiI4IEyJFz',
    })
}
