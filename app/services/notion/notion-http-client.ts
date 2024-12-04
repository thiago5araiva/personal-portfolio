import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CreateAxiosDefaults,
} from 'axios'
import { IHttpClient } from '../http-client.interface'
import { NotionConfig } from './notion-config'

export class NotionHttpClient implements IHttpClient {
    private axiosInstance: AxiosInstance
    constructor() {
        const config: CreateAxiosDefaults = {
            baseURL: NotionConfig.baseUrl,
            headers: {
                'Notion-Version': NotionConfig.version,
            },
        }
        this.axiosInstance = axios.create(config)
        this.axiosInstance.interceptors.request.use(async (config) => {
            config.headers.Authorization = `Bearer ${NotionConfig.token}`
            return config
        })
    }
    async get(url: string, config: AxiosRequestConfig<any>) {
        return this.axiosInstance.get(url, config)
    }
    async post(url: string, data?: any, config?: any) {
        return this.axiosInstance.post(url, data, config)
    }
}
