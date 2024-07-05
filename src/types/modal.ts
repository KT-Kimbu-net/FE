export type TModalTypes = "test" | null;

export type TUseModalState = {
  modalName?: TModalTypes;
  setModalName: (modalName: TModalTypes) => void;
};
