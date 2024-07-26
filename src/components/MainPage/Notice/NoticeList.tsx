import Image, { StaticImageData } from "next/image";

export default function NoticeList(props: { image: StaticImageData }) {
  return (
    <li className="bg-[#f1f1f1] w-full sm:w-fit py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12 cursor-pointer">
      <Image src={props.image} alt="notice" className="object-cover" />
    </li>
  );
}
