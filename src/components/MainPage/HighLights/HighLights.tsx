"use client";

import Image from "next/image";
import seeMore from "@/img/seeMore.svg";
import { useHighLights } from "@/store/highLights";
import { HighLightDummyData } from "@/data/highLights/highLightsDummy";
import { PhotosDummyData } from "@/data/highLights/photosDummy";

export default function HighLights() {
  const { setSelectTitle, selectTitle } = useHighLights((state) => ({
    selectTitle: state.selectTitle,
    setSelectTitle: state.setSelectTitle,
  }));

  const selectTitleStyle =
    "text-base md:text-lg lg:text-xl xl:text-2xl font-[Leferi] cursor-pointer";

  const dataToRender =
    selectTitle === "HIGHLIGHTS" ? HighLightDummyData : PhotosDummyData;

  return (
    <section className="w-full lg:w-2/3 bg-white bg-opacity-0 py-4 sm:py-10">
      <section className="w-full flex items-center justify-between px-4 sm:px-0">
        <section className="flex gap-14">
          <section
            className={`${selectTitleStyle} ${
              selectTitle === "HIGHLIGHTS" ? "border-main border-b-[4px]" : ""
            }`}
            onClick={() => {
              setSelectTitle("HIGHLIGHTS");
            }}
          >
            HighLights
          </section>
          <section
            className={`${selectTitleStyle} ${
              selectTitle === "PHOTOS" ? "border-main border-b-[4px]" : ""
            }`}
            onClick={() => {
              setSelectTitle("PHOTOS");
            }}
          >
            Photo
          </section>
        </section>
        <Image
          src={seeMore}
          alt="더 보기"
          className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
        />
      </section>
      <section>
        <ul className="grid sm:grid-cols-4 gap-x-4 gap-y-10 mt-11">
          {dataToRender.map((highLight, index) => (
            <li
              key={index}
              className={`flex flex-col cursor-pointer ${
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
