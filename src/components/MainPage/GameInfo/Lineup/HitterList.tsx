import Image from "next/image";
import { THitterInfo, TPitcherInfo } from "@/types/selectHitter";
import { useSelectHitterState } from "@/store/hitterSelect";
import ncPitcherPlayer from "#/data/gameInfo/ncPlayer/pictherData.json";
import ktPitcherPlayer from "#/data/gameInfo/ktPlayer/pictherData.json";
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

  const { setSelectHitter } = useSelectHitterState((state) => ({
    setSelectHitter: state.setSelectHitter,
  }));

  const phPredictApiHandler = async () => {
    const token = getCookie("token");
    const sendData = {
      batter: {
        name: props.hData.name,
        H: props.hData.H,
        AB: props.hData.AB,
      },
      pitcher: {
        name: props.pData.name,
        SO: props.pData.SO,
        TBF: props.pData.TBF,
      },
    };
    console.log(sendData);
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/vs_predict`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(sendData),
        }
      );
      if (result.ok) {
        const data = await result.json();
        const barWidth = Math.floor(data["타자가 공을 칠 확률"] * 100);
        setPWinPercent(100 - barWidth);
        setTWinPercent(barWidth);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changePlayer = () => {
    const selectTeam = props.hData.팀명 === "KT" ? "KT" : "OPPONENT";
    const selectPitcher =
      props.hData.팀명 === "NC" ? ktPitcherPlayer.data : ncPitcherPlayer.data;
    setSelectHitter({
      selectTeam,
      selectHitter: props.hData,
      selectPitcher,
    });
  };

  return (
    <li
      className="relative flex py-2 px-3.5 cursor-pointer w-full"
      onClick={() => {
        changePlayer();
        phPredictApiHandler();
      }}
    >
      <Image
        src={props.hData.image}
        alt="player"
        className="relative left-2 w-9 h-12 shadow-md"
        width={32}
        height={32}
      />
      <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] text-sm font-[Pretendard-SemiBold] flex-1">
        {props.hData.order}. {props.hData.name}
      </section>
    </li>
  );
}
