import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { ContentfulWorkContent } from "./types"

interface WorkContentData {}

const initialState = {
  title: "",
  createdAt: "",
  type: "",
  content: {
    json: {
      nodeType: "",
      data: {},
      content: [],
    },
    links: {
      assets: {
        block: [],
      },
    },
  },
}

interface Store {
  state: ContentfulWorkContent
  setWorkData: (data: WorkContentData) => void
}

const useWorkStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        state: { ...initialState },
        setWorkData: (data) => set((state) => ({ ...state, data })),
      }),
      { name: "bearStore" }
    )
  )
)
export default useWorkStore
