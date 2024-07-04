import Image from "next/image";
import shop from "@/img/shortcutShop.svg";
import ticket from "@/img/shortcutTicket.svg";
import parking from "@/img/shortcutParking.svg";

export default function Shortcuts() {
  const shortcutListStlye =
    "relative p-2 bg-white rounded-3xl cursor-pointer w-fit shadow-[0_4px_4px_0px_rgba(255,255,255,0.25)]";

  return (
    <ul className="w-3/4 flex justify-between gap-5">
      <li className={shortcutListStlye}>
        <Image src={shop} alt="shortcut shop" className="w-[50rem]" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%]">
          KT WIZ Shop
        </span>
      </li>
      <li className={shortcutListStlye}>
        <Image src={ticket} alt="shortcut shop" className="w-[50rem]" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%]">
          Ticket
        </span>
      </li>
      <li className={shortcutListStlye}>
        <Image src={parking} alt="shortcut shop" className="w-[50rem]" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%]">
          Parking
        </span>
      </li>
    </ul>
  );
}
