import { IHttpClient } from '@/services/http-client.interface'
import { ContentfulConfig } from '@/services/contentful/contentful-config'
import { ContentfulHttpClient } from '@/services/contentful/contentful-http-client'
import type { ContentfulEntriesResponse } from '@/services/contentful/contentful.type'

export class ContentfulRepository {
    constructor(private httpClient: IHttpClient) {}
    async getPostEntries(): Promise<ContentfulEntriesResponse> {
        const url = `/spaces/${ContentfulConfig.space}/environments/master/entries?include=1&order=-sys.createdAt`
        return await this.httpClient.get(url)
    }
}

const httpClient = new ContentfulHttpClient()
const contentfulRepository = new ContentfulRepository(httpClient)

export { contentfulRepository }
