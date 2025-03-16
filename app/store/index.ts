import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ContentHome, NotionContentType } from '@/home/type'

interface IInitialState {
    content?: ContentHome
}

interface IActions {
    setContent: (data: ContentHome) => void
}

const initialState: IInitialState = {
    content: undefined,
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
