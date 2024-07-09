import SubMenu from "@/components/Layouts/SubMenu";
import CreditGet from "./CreditGet";
import CreditUsed from "./CreditUsed";
import CreditDelete from "./CreditDelete";
import useSubMenu from "@/hooks/useSubMenu";

export default function Credit() {
  const { menuList, menuStatus, functionList } = useSubMenu([
    "적립내역",
    "사용내역",
    "소멸내역",
  ]);
  return (
    <>
      <SubMenu
        menuList={menuList}
        functionList={functionList}
        menuStatus={menuStatus}
      />
      <div className="w-[800px] h-[100px] bg-[#F6F7F9] flex flex-row items-center justify-center gap-8 mt-5">
        <p className="font-[600] text-[20px] ">기간 : </p>
        <input
          type="date"
          className=" h-[45px] px-2 border-[#DDDDDD] border-[1px]"
        />
        <p>~</p>
        <input
          type="date"
          className=" h-[45px] px-2 border-[#DDDDDD] border-[1px]"
        />
        <button className=" rounded-[5px] w-[75px] text-[20px] font-[600] h-[45px] bg-[#FF0000] text-white">
          검색
        </button>
      </div>
      <div
        className={
          menuStatus === "적립내역"
            ? " opacity-100 transition ease-in-out duration-300 flex items-center w-full justify-center mt-10"
            : "hidden opacity-0"
        }
      >
        <CreditGet />
      </div>
      <div
        className={
          menuStatus === "사용내역"
            ? " opacity-100 transition ease-in-out duration-300 flex items-center w-full justify-center mt-10"
            : "hidden opacity-0"
        }
      >
        <CreditUsed />
      </div>
      <div
        className={
          menuStatus === "소멸내역"
            ? " opacity-100 transition ease-in-out duration-300 flex items-center w-full justify-center mt-10"
            : "hidden opacity-0"
        }
      >
        <CreditDelete />
      </div>
    </>
  );
}
