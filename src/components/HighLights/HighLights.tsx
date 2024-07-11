import Image from "next/image";
import seeMore from "@/img/seeMore.svg";
import HighLight from "@/img/HighLight예시.svg";

const HighLightDummyData = [
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
  {
    image: HighLight,
    title: "7이닝 2피안타? 귀엽네... KT 종신할래요? [위즈덕후]",
    date: "2024.06.26",
  },
];

export default function HighLights() {
  return (
    <section className="w-2/3 bg-white bg-opacity-0 py-10">
      <section className="w-full flex items-center justify-between">
        <section className="flex gap-14 text-2xl">
          <span className="font-[Leferi]">HighLights</span>
          <span className="font-[Leferi]">Photo</span>
        </section>
        <Image src={seeMore} alt="더 보기" className="cursor-pointer" />
      </section>
      <section>
        <ul className="grid grid-cols-4 gap-x-4 gap-y-10  mt-11">
          {HighLightDummyData.map((highLight, index) => (
            <li
              key={index}
              className={`flex flex-col ${
                index < 2 ? "col-span-2 w-full" : "col-span-1"
              }`}
            >
              <Image src={highLight.image} alt="highlight" className="w-full" />
              <strong className="text-lg line-clamp-1">
                {highLight.title}
              </strong>
              <p className="text-sm text-gray-500">{highLight.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
