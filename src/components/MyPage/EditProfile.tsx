"use client";

import { useEffect, useState } from "react";

export default function EditProfile() {
  const [token, setToken] = useState<string>();
  const getHisoryHandler = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/user/my_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({}),
      }
    );
    console.log(result);
  };
  useEffect(() => {
    const cookie = document.cookie.split("token=")[1];
    console.log(cookie);

    if (token) {
      getHisoryHandler();
    } else {
      setToken(cookie);
    }
  }, [token]);
  return (
    <>
      <div>간이 페이지 입니다.</div>
    </>
  );
}
