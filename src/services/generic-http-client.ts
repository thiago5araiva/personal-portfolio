import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CreateAxiosDefaults,
} from 'axios'
import { IHttpClient } from './http-client.interface'

export interface HttpClientConfig {
    baseURL: string
    headers?: Record<string, string>
    timeout?: number
    interceptors?: {
        request?: (config: any) => any | Promise<any>
        response?: (response: any) => any | Promise<any>
    }
}

export class GenericHttpClient implements IHttpClient {
    protected axiosInstance: AxiosInstance

    constructor(config: HttpClientConfig) {
        const axiosConfig: CreateAxiosDefaults = {
            baseURL: config.baseURL,
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
            timeout: config.timeout || 30000,
        }

        this.axiosInstance = axios.create(axiosConfig)

        // Setup interceptors se fornecidos
        if (config.interceptors?.request) {
            this.axiosInstance.interceptors.request.use(
                config.interceptors.request
            )
        }
        if (config.interceptors?.response) {
            this.axiosInstance.interceptors.response.use(
                config.interceptors.response
            )
        }
    }

    async get(url: string, config?: AxiosRequestConfig): Promise<any> {
        return await this.axiosInstance.get(url, config)
    }

    async post(url: string, data?: any, config?: any): Promise<any> {
        return await this.axiosInstance.post(url, data, config)
    }
}
