import { IHttpClient } from '../http-client.interface'
import { NotionHttpClient } from './notion-http-client'

export class NotionRepository {
    constructor(private httpClient: IHttpClient) {}
    async getNotionPage(id: string) {
        return await this.httpClient.get(`/pages/${id}`)
    }
    async getNotionBlock(id: string) {
        return await this.httpClient.get(`/blocks/${id}/children?page_size=100`)
    }
    async getNotionContent(url: string) {
        return await this.httpClient.get(url)
    }
}

const httpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(httpClient)

export { notionRepository }
