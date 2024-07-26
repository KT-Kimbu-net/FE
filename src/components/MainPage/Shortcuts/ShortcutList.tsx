import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ShortcutList(props: {
  shortcutImage: StaticImageData;
  title: string;
}) {
  return (
    <li className="relative p-2 bg-white hover:bg-[#605f5f] duration-300 rounded-3xl cursor-pointer w-fit shadow-[0_4px_4px_0px_rgba(255,255,255,0.25)]">
      <Link href="https://www.ktwizstore.co.kr/" target="_blank">
        <Image
          src={props.shortcutImage}
          alt="shortcut shop"
          className="w-[50rem] h-full"
        />
        <span className="text-2xl text-white absolute top-[10%] left-[10%] font-[Leferi]">
          {props.title}
        </span>
      </Link>
    </li>
  );
}
