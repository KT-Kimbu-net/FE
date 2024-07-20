"use client";

import Image from "next/image";
import ktPitcher from "#/data/gameInfo/ktPlayer/pictherData.json";
import ncPitcher from "#/data/gameInfo/ncPlayer/pictherData.json";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { useSelectPictherRecord } from "@/store/gameInfo";
import { useSelectHitterState } from "@/store/hitterSelect";

export default function Picther() {
  const { selectPictherRecord, setSelectPitcherRecord } =
    useSelectPictherRecord((state) => ({
      selectPictherRecord: state.selectPitcherRecord,
      setSelectPitcherRecord: state.setSelectPitcherRecord,
    }));

  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const player = select.selectTeam === "KT" ? ncPitcher : ktPitcher;

  const indicatorStyle = "w-full flex items-center justify-between px-4";
  const indicatorTitleStyle = "text-sm font-[Pretendard-SemiBold]";
  const indicatorContentStyle = "font-[Pretendard-SemiBold]";

  return (
    <section className="w-1/2 bg-[#FFF4F4] rounded-2xl flex flex-col items-center py-6 px-5 before:content-['등판투수기록'] before:font-[Pretendard-Bold] before:border-[1px] before:py-3 before:px-8 before:rounded-xl before:text-[#242424] before:bg-white before:absolute before:top-[-2rem] before:shadow-md">
      <section className="flex gap-4 items-center">
        <Image
          src={player.data.image}
          alt="pitcher"
          width={48}
          height={64}
          style={{ width: 48, height: 64 }}
        />
        <strong className="text-2xl">{player.data.name}</strong>
      </section>
      <ul className="flex gap-8 mt-4">
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectPictherRecord === "CURRENT" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectPitcherRecord("CURRENT");
          }}
        >
          현재시즌
        </li>
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectPictherRecord === "RELATIVE" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectPitcherRecord("RELATIVE");
          }}
        >
          상대전적
        </li>
      </ul>
      <ul className="w-full mt-2 flex flex-col gap-2">
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>등판횟수</span>
          <span className={indicatorContentStyle}>{player.data.G}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>시즌성적</span>
          <span className={indicatorContentStyle}>
            {player.data.W}승 {player.data.L}패
          </span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>방어율</span>
          <span className={indicatorContentStyle}>{player.data.ERA}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>피안타율</span>
          <span className={indicatorContentStyle}>{player.data.AVG}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>이닝소화</span>
          <span className={indicatorContentStyle}>{player.data.IP}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>FIP</span>
            <AiOutlineExclamationCircle
              data-tooltip-id="fip-tooltip"
              data-tooltip-html={`FIP (Fielding Independent Pitching)는 투수가 직접적으로 제어할 수 있는 요소, 즉 삼진, 볼넷, 그리고 홈런 허용을 기반으로 하여 투수의 실력을 평가하는 지표입니다.<br/>FIP는 투수의 실제 성과를 측정하려고 하며, 수비의 영향을 배제합니다.<br/>FIP 2.50: 엘리트 수준의 투구
<br/>FIP 3.50: 평균적인 투수<br/>
FIP 4.50: 평균 이하
`}
            />
            <Tooltip id="fip-tooltip" place="top" style={{ width: "20rem" }} />
          </div>
          <span className={indicatorContentStyle}>{player.data.FIP}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>WHIP</span>
            <AiOutlineExclamationCircle
              data-tooltip-id="whip-tooltip"
              data-tooltip-html={`WHIP (Walks plus Hits per Inning Pitched)는 투수가 이닝당 허용한 볼넷과 피안타의 합계를 나타냅니다.<br/>WHIP 1.00: 매우 우수한 성과, 매우 효과적으로 이닝을 소화하는 투수<br/>
WHIP 1.20: 평균적인 성과, 안정적인 투구를 보이는 투수<br/>
WHIP 1.40: 평균 이하, 많은 출루를 허용하는 투수`}
            />
            <Tooltip id="whip-tooltip" place="top" style={{ width: "20rem" }} />
          </div>
          <span className={indicatorContentStyle}>{player.data.WHIP}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>WAR</span>
            <AiOutlineExclamationCircle
              data-tooltip-id="war-tooltip"
              data-tooltip-html={`WAR은 Wins Above Replacement의 약자로 대체 선수 대비 승리 기여도입니다. 대체선수에 비해 얼마나 많은 승리에 기여했는가를 나타내는 수치입니다.<br/> 예를 들어 2010년 이대호의 WAR은 8.76이었는데 이는 2010년 이대호가 대체선수에 비해 팀에 8.76승을 더 안겨주었다는 뜻입니다.`}
            />
            <Tooltip id="war-tooltip" place="top" style={{ width: "20rem" }} />
          </div>
          <span className={indicatorContentStyle}>{player.data.WAR}</span>
        </li>
      </ul>
    </section>
  );
}
