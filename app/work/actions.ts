import { client, gql } from '@/services/contentful'
import { PageWordContent, PageWorkType } from './types'
import notion from '@/services/notion'

const pageWorkId = '6dEjU3iWDzaLKMS2hVS3Fq'

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
    `
    return await client.request(query, { pageWorkId })
}
export async function getWorkContentById(id: string): Promise<PageWordContent> {
    const query = gql`
        query PageAbout($workContentId: String!) {
            workContent(id: $workContentId) {
                title
                slug
                stack
                embed
                sys {
                    id
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
    return await client.request(query, { workContentId: id })
}
