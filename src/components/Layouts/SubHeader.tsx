import Image from "next/image";

type TSubtitle = {
  title: string;
  subTitle: string;
};

export default function SubHeader(props: TSubtitle) {
  return (
    <>
      <header className="w-full h-[7em]  md:h-[8em] lg:h-[10em] xl:h-[12em] 2xl:h-[14em] bg-no-repeat bg-cover bg-subHeaderImg relative">
        <div className="z-10 flex flex-col w-full h-full items-center justify-center">
          <h1 className="typography-title text-[36px]  text-white ">
            {props.title}
          </h1>
          <h3 className="typography-subtitle font-[400] text-[16px]">
            {props.subTitle}
          </h3>
        </div>
      </header>
    </>
  );
}
