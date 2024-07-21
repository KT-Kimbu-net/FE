"use client";

import { useEffect, useCallback } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";
import { TMessageType } from "@/types/chatting";
import { getCookie } from "cookies-next";
import { useLiveScoreState } from "@/store/liveScore";
import { TChangeScore, TChangePitcher } from "@/types/liveScore";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount, getCleanChat } = useChatState((state) => ({
    setChatLog: state.setChatLog,
    setUserCount: state.setUserCount,
    cleanChat: state.cleanChat,
    getCleanChat: state.getCleanChat,
  }));

  const { setKtPitcher, setKtScore, setOpponentPitcher, setOpponentScore } =
    useLiveScoreState((state) => ({
      setKtPitcher: state.setKtPitcher,
      setKtScore: state.setKtScore,
      setOpponentPitcher: state.setOpponentPitcher,
      setOpponentScore: state.setOpponentScore,
    }));

  const chatMsgSocketHandler = async (message: TMessageType) => {
    if (getCleanChat()) {
      const filterMessage = {
        chat_text: message.message,
      };

      const token = getCookie("token");

      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/text_filtering`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(filterMessage),
        }
      );
      if (result.ok) {
        const data = await result.json();
        setChatLog({
          nickname: message.nickname,
          message: data.filter_text,
          time: message.time,
          report: message.report,
          msgId: message.msgId,
          userId: message.userId,
          type: message.type,
        });
      }
    } else {
      setChatLog(message);
    }
  };

  const clientsCountSocketHandler = (data: any) => {
    setUserCount(data.count);
  };

  const gameScoreSocketHandler = (data: TChangeScore) => {};
  const pitcherChangeSocketHandler = (data: TChangePitcher) => {};

  useEffect(() => {
    chatSocket.on("chatting", chatMsgSocketHandler);
    chatSocket.on("peoples", clientsCountSocketHandler);
    chatSocket.on("changeScore", gameScoreSocketHandler);
    chatSocket.on("changePitcher", pitcherChangeSocketHandler);
    return () => {
      chatSocket.off("chatting", chatMsgSocketHandler);
      chatSocket.off("peoples", clientsCountSocketHandler);
      chatSocket.off("changeScore", gameScoreSocketHandler);
      chatSocket.off("changePitcher", pitcherChangeSocketHandler);
    };
  }, []);

  return <></>;
}
