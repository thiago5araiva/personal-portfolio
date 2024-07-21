import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PageWorkType } from "./types";

interface Store extends PageWorkType {}

interface Actions {
  setPageWork: (data?: PageWorkType) => void;
}

const initialState: Store = {
  pageWork: undefined,
};

const useStore = create<Store & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setPageWork: (data) => set((s) => ({ ...s, pageWork: data?.pageWork })),
        getPageWork: () => get().pageWork,
      }),
      { name: "work-collection" },
    ),
  ),
);
export default useStore;
