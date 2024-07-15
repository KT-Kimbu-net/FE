import Image from "next/image";
import shop from "@/img/shortcutShop.png";
import ticket from "@/img/shortcutTicket.png";
import parking from "@/img/shortcutParking.png";

export default function Shortcuts() {
  const shortcutListStlye =
    "relative p-2 bg-white rounded-3xl cursor-pointer w-fit shadow-[0_4px_4px_0px_rgba(255,255,255,0.25)]";

  return (
    <ul className="w-2/3 flex justify-between gap-5">
      <li className={shortcutListStlye}>
        <Image src={shop} alt="shortcut shop" className="w-[50rem] h-full" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%] font-[Leferi]">
          KT WIZ Shop
        </span>
      </li>
      <li className={shortcutListStlye}>
        <Image src={ticket} alt="shortcut shop" className="w-[50rem] h-full" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%] font-[Leferi]">
          Ticket
        </span>
      </li>
      <li className={shortcutListStlye}>
        <Image src={parking} alt="shortcut shop" className="w-[50rem] h-full" />
        <span className="text-2xl text-white absolute top-[10%] left-[10%] font-[Leferi]">
          Parking
        </span>
      </li>
    </ul>
  );
}
