import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { PageHomeType } from './types'
import { NotionContentType } from '@/api/type'

interface IInitialState {
    content: NotionContentType[]
}

interface IActions {
    setContent: (data: NotionContentType[]) => void
}

const initialState: IInitialState = {
    content: [],
}

type Store = IInitialState & IActions

const useStore = create<Store>()(
    persist(
        (set, get) => ({
            ...initialState,
            setContent: (data) => set((state) => ({ ...state, content: data })),
        }),
        { name: 'work-collection' }
    )
)
export default useStore
