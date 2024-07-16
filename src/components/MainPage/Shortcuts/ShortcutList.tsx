import Image, { StaticImageData } from "next/image";

export default function ShortcutList(props: {
  shortcutImage: StaticImageData;
  title: string;
}) {
  return (
    <li className="relative p-2 bg-white rounded-3xl cursor-pointer w-fit shadow-[0_4px_4px_0px_rgba(255,255,255,0.25)]">
      <Image
        src={props.shortcutImage}
        alt="shortcut shop"
        className="w-[50rem] h-full"
      />
      <span className="text-2xl text-white absolute top-[10%] left-[10%] font-[Leferi]">
        {props.title}
      </span>
    </li>
  );
}
