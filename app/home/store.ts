import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Actions, Store } from "./types"

const initialState: Store = {
  title: "",
  subtitle: "",
  cta: "",
  imagesCollection: {
    items: [],
  },
}
const useStore = create<Store & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
      }),
      { name: "home-collection" }
    )
  )
)
export default useStore
