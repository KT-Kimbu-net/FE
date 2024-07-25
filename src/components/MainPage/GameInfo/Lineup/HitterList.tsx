import Image from "next/image";
import { THitterInfo, TPitcherInfo } from "@/types/selectHitter";
import { useSelectHitterState } from "@/store/hitterSelect";
import { getCookie } from "cookies-next";
import { usePHPredictState } from "@/store/phPredict";

type THitterListProps = {
  hData: THitterInfo;
  pData: TPitcherInfo;
};

export default function HitterList(props: THitterListProps) {
  const { setPWinPercent, setTWinPercent } = usePHPredictState((state) => ({
    setPWinPercent: state.setPWinPercent,
    setTWinPercent: state.setTWinPercent,
  }));

  const { setSelectHitter, select } = useSelectHitterState((state) => ({
    setSelectHitter: state.setSelectHitter,
    select: state.select,
  }));

  // const phPredictApiHandler = async () => {
  //   const token = getCookie("token");
  //   const sendData = {
  //     batter: {
  //       name: props.hData.name,
  //       H: props.hData.H,
  //       AB: props.hData.AB,
  //     },
  //     pitcher: {
  //       name: props.pData.name,
  //       SO: props.pData.SO,
  //       TBF: props.pData.TBF,
  //     },
  //   };
  //   try {
  //     const result = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASEURL}/vs_predict`,
  //       {
  //         method: "post",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${token}`,
  //         },
  //         body: JSON.stringify(sendData),
  //       }
  //     );
  //     if (result.ok) {
  //       const data = await result.json();
  //       const barWidth = Math.floor(data["타자가 공을 칠 확률"] * 100);
  //       setPWinPercent(100 - barWidth);
  //       setTWinPercent(barWidth);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const testHandler = () => {
    const randomNumber = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
    const barWidth = Math.floor(randomNumber);
    setPWinPercent(100 - barWidth);
    setTWinPercent(barWidth);
  };

  const changePlayer = () => {
    const selectTeam = props.hData.팀명 === "KT" ? "KT" : "OPPONENT";

    setSelectHitter({
      selectTeam,
      selectHitter: props.hData,
      selectPitcher: props.pData,
    });
  };

  const selectHitterStyle = `relative flex py-2 px-3.5 cursor-pointer w-full z-10 duration-300 box-border group ${
    props.hData.name === select.selectHitter.name
      ? `${props.hData.팀명 === "KT" ? "bg-main" : "bg-black"} rounded-3xl`
      : `${
          props.hData.팀명 === "KT"
            ? "hover:bg-[#ffcdd3]"
            : "hover:bg-[#848484]"
        }`
  }`;

  return (
    <li
      className={selectHitterStyle}
      onClick={() => {
        // phPredictApiHandler();
        changePlayer();
        testHandler();
      }}
    >
      <Image
        src={props.hData.image}
        alt="player"
        width={32}
        height={32}
        className="relative left-2 w-9 h-auto"
      />
      <section
        className={`py-3 pl-4 pr-8 bg-white ${
          select.selectHitter.name !== props.hData.name
            ? "bg-opacity-50 group-hover:bg-white"
            : ""
        } rounded-xl text-sm font-[Pretendard-SemiBold] flex items-center flex-1`}
      >
        {props.hData.order}. {props.hData.name}
      </section>
    </li>
  );
}
