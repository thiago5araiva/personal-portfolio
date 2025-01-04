import { NextResponse } from 'next/server'
import { NotionHttpClient } from '@/_services/notion/notion-http-client'
import { NotionRepository } from '@/_services/notion/notion-repository'

const notionHttpClient = new NotionHttpClient()
const notionRepository = new NotionRepository(notionHttpClient)

export async function GET(params: { id: string }) {
    const { data } = await notionRepository.getNotionContent(params.id)
    return NextResponse.json({ data: data?.results })
}
