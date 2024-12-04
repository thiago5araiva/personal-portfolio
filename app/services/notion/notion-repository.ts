import { IHttpClient } from '../http-client.interface'

export class NotionRepository {
    constructor(private httpClient: IHttpClient) {}
    async getNotionPage(id: string) {
        return this.httpClient.get(`/pages/${id}`)
    }
    async getNotionBlock(id: string) {
        return this.httpClient.get(`/blocks/${id}/children?page_size=100`)
    }
    async getNotionContent(url: string) {
        return await this.httpClient.get(url)
    }
}
