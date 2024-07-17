export type TReport = {
  type: string;
  userId: string;
};

export type TMessageType = {
  nickname: string;
  message: string;
  time: string;
  report: TReport[];
  msgId: string;
  userId: string;
};

export type TUseChatState = {
  isShow: boolean;
  setIsShow: () => void;
  userCount: string;
  setUserCount: (v: string) => void;
  chatLog: TMessageType[];
  setChatLog: (v: TMessageType) => void;
  setAllChatLog: (v: TMessageType[]) => void;
  cleanChat: boolean;
  setCleanChat: () => void;
  getCleanChat: () => boolean;
};
