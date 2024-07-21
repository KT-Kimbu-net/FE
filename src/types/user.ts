import { UserData } from "./api";

export type TUseUserState = {
  userData?: UserData;
  setUserData: (userData: UserData) => void;
};
