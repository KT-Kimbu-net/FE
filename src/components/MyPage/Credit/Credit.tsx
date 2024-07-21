"use client";
import SubMenu from "@/components/Layouts/SubMenu";
import useSubMenu from "@/hooks/useSubMenu";
import CreditGet from "./CreditList";
import CreditUsed from "./CreditUsed";
import CreditDelete from "./CreditDelete";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import CreditList from "./CreditList";
import InputDate from "./InputDate";

export type THistory = {
  date?: string;
  content: string;
  deleteDate?: string;
  amount: number;
};

const getDate = (minusNum: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - minusNum);
  return currentDate.toISOString().split("T")[0];
};

export default function Credit() {
  const [startDate, setStartDate] = useState<string>(getDate(7));
  const [endDate, setEndDate] = useState<string>(getDate(0));
  const [token, setToken] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [historys, setHistorys] = useState<THistory[]>([]);

  const { menuList, menuStatus, functionList } = useSubMenu([
    "적립내역",
    "사용내역",
    "소멸내역",
  ]);
  const menuStatusApi: { [key: string]: string[] } = {
    적립내역: ["get_point", "getHistory"],
    사용내역: ["used_point", "usedHistory"],
    소멸내역: ["del_point", "deleteHistory"],
  };
  const getHisoryHandler = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/user/${menuStatusApi[menuStatus][0]}?page=1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${document.cookie.split("token=")[1]}`,
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
        }),
      }
    );
    const data = await result.json();
    console.log(data);

    setHistorys(data[menuStatusApi[menuStatus][1]]);
  };
  useEffect(() => {
    getHisoryHandler();
  }, [menuStatus]);

  return (
    <>
      <SubMenu
        menuList={menuList}
        functionList={functionList}
        menuStatus={menuStatus}
      />
      <InputDate
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        getHisoryHandler={getHisoryHandler}
      />

      {historys?.length > 0 && (
        <CreditList
          historys={historys}
          menuStatus={menuStatus as "사용내역" | "소멸내역" | "적립내역"}
        />
      )}
    </>
  );
}
