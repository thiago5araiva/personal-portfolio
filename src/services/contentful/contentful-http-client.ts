import { IHttpClient } from '../http-client.interface'
import { ContentfulConfig } from './contentful-config'

export class ContentfulHttpClient implements IHttpClient {
    private baseURL: string
    private token: string

    constructor() {
        this.baseURL = ContentfulConfig.baseUrl
        this.token = ContentfulConfig.token
    }

    async get(url: string): Promise<any> {
        const response = await fetch(`${this.baseURL}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        return { data }
    }
}
