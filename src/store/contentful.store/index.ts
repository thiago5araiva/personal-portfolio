import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContentfulPostData } from '@/store/contentful.store/contentful.type'

interface InterfaceContentfulData {
    data: ContentfulPostData
}

const initialState: InterfaceContentfulData = {
    data: {
        sys: {
            type: '',
        },
        total: 0,
        skip: 0,
        limit: 0,
        items: [],
    },
}

type TypeContentfulStore = InterfaceContentfulData
const useContentfulStore = create<TypeContentfulStore>()(
    persist(() => initialState, { name: 'post-collection' })
)

const { setState, getState } = useContentfulStore

export const resetContentfulData = () => setState(initialState)
export const setContentfulData = (data: ContentfulPostData) => {
    setState({ data })
}

export default useContentfulStore
