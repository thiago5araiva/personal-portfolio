import { GenericHttpClient } from '../generic-http-client'
import { ContentfulConfig } from './contentful-config'

export class ContentfulHttpClient extends GenericHttpClient {
    constructor() {
        super({
            baseURL: ContentfulConfig.baseUrl,
            interceptors: {
                request: async (config) => {
                    config.headers.Authorization = `Bearer ${ContentfulConfig.token}`
                    return config
                },
            },
        })
    }
}
