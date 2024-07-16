import Image, { StaticImageData } from "next/image";
import NoticeExam from "@/img/Notice예시.svg";

export default function NoticeList(props: { image: StaticImageData }) {
  return (
    <li className="bg-[#f1f1f1] w-fit py-12">
      <Image src={props.image} alt="notice" />
    </li>
  );
}
