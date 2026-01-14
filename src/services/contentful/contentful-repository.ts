import { IHttpClient } from '@/services/http-client.interface'
import { ContentfulConfig } from '@/services/contentful/contentful-config'
import { ContentfulHttpClient } from '@/services/contentful/contentful-http-client'
import type { GetEntriesOptions } from '@/store/contentful.store/contentful.type'

export class ContentfulRepository {
    constructor(private httpClient: IHttpClient) {}
    async getPostEntries(options?: GetEntriesOptions) {
        const orderParam = options?.order || '-sys.createdAt'
        const url = `/spaces/${ContentfulConfig.space}/environments/master/entries?include=1&order=${orderParam}`
        return await this.httpClient.get(url)
    }
    async getPostAssetById(id: string) {
        const url = `/spaces/${ContentfulConfig.space}/environments/master/entries/${id}`
        return await this.httpClient.get(url)
    }
}

const httpClient = new ContentfulHttpClient()
const contentfulRepository = new ContentfulRepository(httpClient)

export { contentfulRepository }
