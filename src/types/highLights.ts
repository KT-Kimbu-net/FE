export type selectTitle = "HIGHLIGHTS" | "PHOTOS";

export type TUseHighLights = {
  selectTitle: selectTitle;
  setSelectTitle: (v: selectTitle) => void;
};
