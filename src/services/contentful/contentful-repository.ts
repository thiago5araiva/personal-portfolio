import { IHttpClient } from '@/services/http-client.interface'
import { ContentfulConfig } from '@/services/contentful/contentful-config'
import { ContentfulHttpClient } from '@/services/contentful/contentful-http-client'
import type {
    GetEntriesOptions,
} from '@/store/contentful.store/contentful.type'

export class ContentfulRepository {
    constructor(private httpClient: IHttpClient) {}
    async getPostEntries(options?: GetEntriesOptions) {
        const orderParam = options?.order || '-sys.createdAt'
        const skip = options?.skip ?? 0
        const limit = options?.limit ?? 0
        const paginationParams = limit > 0 ? `&skip=${skip}&limit=${limit}` : ''
        const url = `/spaces/${ContentfulConfig.space}/environments/master/entries?include=1&order=${orderParam}${paginationParams}`
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
