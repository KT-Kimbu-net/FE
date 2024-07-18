"use client";

import { useLayoutEffect } from "react";
import { getCookie } from "cookies-next";
import { useUserState } from "@/store/user";
import { getMyDataAction } from "@/libs/action/GetMyDataAction";
import { chatSocket } from "@/socket/ChatSocket";

export default function LoginCheck() {
  const { setUserData } = useUserState();

  const getMyDataApiHandler = async () => {
    const data = await getMyDataAction();
    if (data?.status === 200) {
      chatSocket.connect();
      setUserData(data.data);
    }
  };

  useLayoutEffect(() => {
    if (getCookie("token")) {
      getMyDataApiHandler();
    }
  }, []);

  return <></>;
}
