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
    async getNotionContent(pageID: string) {
        const { data: page } = await this.getNotionPage(pageID)
        return await this.getNotionBlock(page.id)
    }
}

const httpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(httpClient)

export { notionRepository }
