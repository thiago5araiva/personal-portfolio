import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PageHomeType } from "./types";

interface Store extends PageHomeType {}

interface Actions {
  setPageHome: (data?: PageHomeType) => void;
}

const initialState: Store = {
  pageHome: undefined,
};

const useStore = create<Store & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setPageHome: (data) => set((s) => ({ ...s, pageHome: data?.pageHome })),
      }),
      { name: "work-collection" },
    ),
  ),
);
export default useStore;
