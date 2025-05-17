import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NotionBlockType, NotionContentType } from './notion.types'

interface InterfaceNotionContent {
    content: NotionContentType[]
}

const initialState: InterfaceNotionContent = {
    content: [],
}

type TypeNotionStore = InterfaceNotionContent
const useNotionStore = create<TypeNotionStore>()(
    persist(() => initialState, { name: 'work-collection' })
)

const { setState, getState } = useNotionStore

export const setNotionContent = (data: NotionContentType[]) => {
    setState((state) => ({ ...state, content: data }))
}
export const setNotionPostBlockContent = (block: NotionBlockType[]) => {
    const { content } = getState()
    const parentId = new Set(block?.map((item) => item.parent.page_id))
    const [id] = parentId.values()
    const mappedContent: NotionContentType[] = content.map((item) => {
        return item.id === id ? item : { ...item, block: block }
    })
    setState((state) => ({ ...state, content: mappedContent }))
}

export default useNotionStore
