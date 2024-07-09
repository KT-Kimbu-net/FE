import { IoHome, IoTicket } from "react-icons/io5";
import { MdLocalParking } from "react-icons/md";
import { TbBuildingStadium } from "react-icons/tb";
import { SiShopee } from "react-icons/si";
import { MdOutlineQuiz } from "react-icons/md";
import { useModalState } from "@/store/modal";

export default function Floating() {
  const listStyle =
    "h-1/5 flex items-center py-4 cursor-pointer hover:scale-150 duration-300";
  const iconStyle = "w-8 h-8";

  const { setModalName } = useModalState();

  return (
    <section className="fixed top-1/3 right-0 px-10 h-fit bg-[rgba(0,0,0,0.7)] text-white">
      <ul className="flex flex-col justify-betweenitems-center h-full">
        <li className={listStyle}>
          <IoHome className={iconStyle} />
        </li>
        <li className={listStyle}>
          <MdOutlineQuiz
            onClick={() => {
              setModalName("quizStart");
            }}
            className={iconStyle}
          />
        </li>
        <li className={listStyle}>
          <MdLocalParking
            onClick={() => {
              setModalName("quizRanking");
            }}
            className={iconStyle}
          />
        </li>
        <li className={listStyle}>
          <TbBuildingStadium className={iconStyle} />
        </li>
        <li className={listStyle}>
          <SiShopee className={iconStyle} />
        </li>
      </ul>
    </section>
  );
}
