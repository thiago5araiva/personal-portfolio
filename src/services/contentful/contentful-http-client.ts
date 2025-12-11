import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CreateAxiosDefaults,
} from 'axios'
import { IHttpClient } from '../http-client.interface'
import { ContentfulConfig } from './contentful-config'

export class ContentfulHttpClient implements IHttpClient {
    private axiosInstance: AxiosInstance
    constructor() {
        const config: CreateAxiosDefaults = {
            baseURL: ContentfulConfig.baseUrl,
            headers: {
                'Content-Type':
                    'application/vnd.contentful.store.delivery.v1+json',
            },
        }
        this.axiosInstance = axios.create(config)
        this.axiosInstance.interceptors.request.use(async (config) => {
            config.headers.Authorization = `Bearer ${ContentfulConfig.token}`
            return config
        })
    }
    async get(url: string, config: AxiosRequestConfig<any>) {
        return await this.axiosInstance.get(url)
    }
    async post(url: string, data?: any, config?: any) {
        return await this.axiosInstance.post(url, data, config)
    }
}
