import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ContentfulWorkCollection, ContentfulWorkItem } from "./types";

interface Store {
  workCollection: ContentfulWorkItem[] | undefined;
  setWorkCollectionState: (data?: ContentfulWorkItem[]) => void;
}

const useWorkStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        workCollection: undefined,
        setWorkCollectionState: (data) => {
          console.log("inside-store", data);
          set((state) => ({ ...state, workCollection: data }));
        },
      }),
      { name: "set-state" },
    ),
  ),
);
export default useWorkStore;
