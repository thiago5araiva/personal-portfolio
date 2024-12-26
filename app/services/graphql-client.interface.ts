export interface IGraphQLClient {
    request<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}
