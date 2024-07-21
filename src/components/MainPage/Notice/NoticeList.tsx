import Image, { StaticImageData } from "next/image";

export default function NoticeList(props: { image: StaticImageData }) {
  return (
    <li className="bg-[#f1f1f1] w-fit py-12 cursor-pointer hover:scale-110 duration-300">
      <Image src={props.image} alt="notice" className="object-cover" />
    </li>
  );
}
