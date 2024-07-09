import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Store {
  applicationLoadingState: boolean
}

interface Actions {
  setApplicationLoadingState: (value: boolean) => void
  getApplicationLoadingState: () => boolean
}

const initialState: Store = {
  applicationLoadingState: false,
}

const useGlobalStore = create<Store & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setApplicationLoadingState: (value) =>
          set((state) => ({
            ...state,
            applicationLoadingState: value,
          })),
        getApplicationLoadingState: () => get().applicationLoadingState,
      }),
      { name: 'global-state' }
    )
  )
)
export default useGlobalStore
