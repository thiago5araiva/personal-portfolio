import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { ContentfulWorkCollection, ContentfulWorkItem } from "./types"

interface Store {
  workCollection: ContentfulWorkItem[] | undefined
}

interface Actions {
  setWorkCollection: (data?: ContentfulWorkItem[]) => void
  getWorkCollection: () => ContentfulWorkItem[] | undefined
}

const initialState: Store = {
  workCollection: undefined,
}
const useWorkStore = create<Store & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setWorkCollection: (d) => set((s) => ({ ...s, workCollection: d })),
        getWorkCollection: () => get().workCollection,
      }),
      { name: "work-collection" }
    )
  )
)
export default useWorkStore
