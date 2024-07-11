"use client";

import Credit from "@/components/MyPage/Credit/Credit";
import Login from "@/components/MyPage/Login/Login";
import React from "react";

export default function MyPage() {
  return (
    <>
      <div className="h-svh w-full flex items-center justify-start flex-col">
        <Credit />
        {/* <Login/> */}
      </div>
    </>
  );
}
