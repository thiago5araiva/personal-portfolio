import { IHttpClient } from '@/services/http-client.interface'
import { NewsHttpClient } from '@/services/news/news-http-client'
import { useQuery } from '@tanstack/react-query'

const baseUrl = 'https://dev.to/stories/feed/'

export class DevToRepository {
    constructor(private httpClient: IHttpClient) {}
    async getNewsFromDevTo() {
        const url = `?page=1&type_of=discover&passed_domain=forem.com`
        return await this.httpClient.get(url)
    }
}

const devToHttpClient = new NewsHttpClient(baseUrl)
const devToRepository = new DevToRepository(devToHttpClient)

export const QueryDevToPostEntries = () => {
    return useQuery({
        queryKey: ['devToPostEntries'],
        queryFn: () => devToRepository.getNewsFromDevTo(),
    })
}

export { devToRepository }
