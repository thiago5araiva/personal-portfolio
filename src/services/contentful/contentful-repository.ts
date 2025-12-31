import { IHttpClient } from '@/services/http-client.interface'
import { ContentfulConfig } from '@/services/contentful/contentful-config'
import { ContentfulHttpClient } from '@/services/contentful/contentful-http-client'

export class ContentfulRepository {
    constructor(private httpClient: IHttpClient) {}
    async getPostEntries() {
        const url = `/spaces/${ContentfulConfig.space}/environments/master/entries`
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
