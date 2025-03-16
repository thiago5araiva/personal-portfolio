import axios, { CreateAxiosDefaults } from 'axios'

export const BASE_URL = `${process.env.NEXT_PUBLIC_NOTION_HOST}`
export const TOKEN = `${process.env.NEXT_PUBLIC_NOTION_API}`

const config: CreateAxiosDefaults = {
    headers: {
        'Notion-Version': '2022-02-22',
    },
}
const notion = axios.create(config)
notion.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${TOKEN}`
    return config
})

export default notion
