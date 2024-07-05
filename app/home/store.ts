import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Store } from "./types"

const initialState: Store = {
  title: "",
  subtitle: "",
  cta: "",
  imagesCollection: {
    items: [],
  },
}
const useStore = create<Store>()(
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
