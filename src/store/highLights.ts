import { create } from "zustand";
import { TUseHighLights, selectTitle } from "@/types/highLights";

export const useHighLights = create<TUseHighLights>((set) => ({
  selectTitle: "HIGHLIGHTS",
  setSelectTitle: (select: selectTitle) => set(() => ({ selectTitle: select })),
}));
