"use client";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { THistory } from "./Point";
import { nanoid } from "nanoid";
import CreditContent from "./PointContent";

type TMenuStatus = "적립내역" | "사용내역" | "소멸내역";

type TProps = {
  historys: THistory[];
  menuStatus: TMenuStatus;
};

const menuList: { [key: string]: string[] } = {
  적립내역: ["획득일자", "상세내용", "포인트", "유효기간"],
  사용내역: ["사용일자", "상세내용", "포인트"],
  소멸내역: ["소멸일자", "상세내용", "포인트"],
};

export default function PointtList(props: TProps) {
  const [historys, setHistorys] = useState<THistory[][]>([]);
  const [page, setPage] = useState<number>(1);
  function chunkArray(arr: THistory[], size: number): THistory[][] {
    const chunkedArray: THistory[][] = [];
    let index = 0;

    while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + size));
      index += size;
    }
    return chunkedArray;
  }
  useEffect(() => {
    setHistorys(chunkArray(props.historys, 10));
  }, [props.historys]);

  return (
    <div className=" opacity-100 transition ease-in-out duration-300 flex items-center justify-center mt-10 flex-col gap-5 mb-5">
      <div className="flex flex-col items-center w-full justify-center">
        <table className="font-[100]">
          <tbody>
            <tr className="bg-[#FAFAFA] h-[50px] border-[#BBBBBB] border-t-[2px]">
              <th className="w-[200px] text-center">
                {menuList[props.menuStatus][0]}
              </th>

              <th className="w-[200px] text-center">
                {menuList[props.menuStatus][1]}
              </th>
              {props.menuStatus === "적립내역" && (
                <th className="w-[200px] text-center">
                  {menuList[props.menuStatus][3]}
                </th>
              )}
              <th className="w-[200px] text-center">
                {menuList[props.menuStatus][2]}
              </th>
            </tr>
            {historys[page - 1]?.map((item) => (
              <CreditContent
                date={
                  props.menuStatus === "소멸내역" ? item.deleteDate : item.date
                }
                content={item.content}
                deleteDate={
                  props.menuStatus === "소멸내역" ? undefined : item.deleteDate
                }
                amount={item.amount}
                key={nanoid()}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        current={page}
        defaultCurrent={1}
        total={props.historys.length}
        align="center"
        onChange={setPage}
      />
    </div>
  );
}
