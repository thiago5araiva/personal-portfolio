import {
    GenericHttpClient,
    HttpClientConfig,
} from '@/services/generic-http-client'

export class NewsHttpClient extends GenericHttpClient {
    constructor(baseURL: string, additionalConfig?: Partial<HttpClientConfig>) {
        super({
            baseURL,
            ...additionalConfig,
        })
    }
}
