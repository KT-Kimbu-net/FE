"use client";

import { useEffect, useLayoutEffect } from "react";
import { getCookie } from "cookies-next";
import { useUserState } from "@/store/user";
import { getMyDataAction } from "@/libs/action/GetMyDataAction";
import { chatSocket } from "@/socket/ChatSocket";
import { useGameBetState } from "@/store/resultBet";

export default function LoginCheck() {
  const { setUserData } = useUserState();
  const { setSelectBet } = useGameBetState();

  const getMyDataApiHandler = async () => {
    const data = await getMyDataAction();
    if (data?.status === 200) {
      // chatSocket.connect();
      setUserData(data.data);
      setSelectBet(data?.data.gamePredict.choose);
    }
  };

  useEffect(() => {
    if (getCookie("token")) {
      getMyDataApiHandler();
    }
  }, []);

  return <></>;
}
