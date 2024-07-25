import Image from "next/image";
import { useSelectHitterRecord } from "@/store/gameInfo";
import { useSelectHitterState } from "@/store/hitterSelect";
import ktHitters from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitters from "#/data/gameInfo/ncPlayer/hitterData.json";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { usePHPredictState } from "@/store/phPredict";

export default function Hitter() {
  const { selectHitterRecord, setSelectHitterRecord } = useSelectHitterRecord(
    (state) => ({
      selectHitterRecord: state.selectHitterRecord,
      setSelectHitterRecord: state.setSelectHitterRecord,
    })
  );

  const { pWinPercent, tWinPercent } = usePHPredictState((state) => ({
    pWinPercent: state.pWinPercent,
    tWinPercent: state.tWinPercent,
  }));

  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const player = (
    select.selectTeam === "KT" ? ktHitters.data : ncHitters.data
  ).find((hitter) => hitter.name === select.selectHitter.name);

  const indicatorStyle = "w-full flex items-center justify-between px-4";
  const indicatorTitleStyle = "text-sm font-[Pretendard-SemiBold]";
  const indicatorContentStyle = "font-[Pretendard-SemiBold]";

  const animateStyle = `w-1/2 bg-[#D4D4D4] rounded-2xl flex flex-col items-center py-6 px-5 before:content-['선택타자기록'] before:font-[Pretendard-Bold] before:border-[1px] before:py-3 before:px-8 before:rounded-xl before:text-[#242424] before:bg-white before:absolute before:top-[-2rem] before:shadow-md ${
    tWinPercent > pWinPercent
      ? "animate-winScale border-[1px] border-black"
      : ""
  }`;

  return (
    <section className={animateStyle}>
      <section className="flex gap-4 items-center">
        <Image
          src={player!.image}
          alt="pitcher"
          width={48}
          height={64}
          className="w-12 h-auto"
        />
        <strong className="text-2xl">{player!.name}</strong>
      </section>
      <ul className="flex gap-8 mt-4">
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectHitterRecord === "CURRENT" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectHitterRecord("CURRENT");
          }}
        >
          현재시즌
        </li>
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectHitterRecord === "RELATIVE" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectHitterRecord("RELATIVE");
          }}
        >
          상대전적
        </li>
      </ul>
      <ul className="w-full mt-2 flex flex-col gap-2">
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>타율</span>
          <span className={indicatorContentStyle}>{player?.AVG}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>홈런</span>
          <span className={indicatorContentStyle}>{player?.HR}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>타점</span>
          <span className={indicatorContentStyle}>{player?.RBI}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>출루율</span>
          <span className={indicatorContentStyle}>{player?.OBP}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>득점</span>
          <span className={indicatorContentStyle}>{player?.R}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>OPS</span>
            <AiOutlineExclamationCircle
              className="text-gray"
              data-tooltip-id="ops-tooltip"
              data-tooltip-html={`OPS (On-base Plus Slugging)는 타자의 출루율(OBP)과 장타율(SLG)을 합산한 값입니다.<br/> 
                     1.000 이상은 엘리트 타자(배리 본즈, 마이크 트라웃, 미구엘 카브레라),<br/>
                     0.900-0.999는 올스타급 타자,<br/>
                     0.800-0.899는 좋은 타자,<br/>
                     0.700-0.799는 평균 이상의 타자를 의미하며, 타자의 전반적인 타격 능력을 평가하는 지표입니다.`}
            />
            <Tooltip id="ops-tooltip" place="top" style={{ width: "20rem" }} />
          </div>
          <span className={indicatorContentStyle}>{player?.OPS}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>WRC+</span>
            <AiOutlineExclamationCircle
              className="text-gray"
              data-tooltip-id="wrc-tooltip"
              data-tooltip-html={`wRC+ (Weighted Runs Created Plus)는 OPS+와 유사한 스탯으로, wOBA에 파크팩터(구장의 특성)를 적용하고 리그평균을 100에 맞춰 조정한 스탯입니다.<br/> wRC+가 150이면 리그평균보다 50%더 득점을 얻어냈다는 뜻입니다.`}
            />
            <Tooltip id="wrc-tooltip" place="top" style={{ width: "20rem" }} />
          </div>
          <span className={indicatorContentStyle}>{player?.["WRC+"]}</span>
        </li>
        <li className={indicatorStyle}>
          <div className="flex gap-2 items-center">
            <span className={indicatorTitleStyle}>WAR</span>
            <AiOutlineExclamationCircle
              className="text-gray"
              data-tooltip-id="war-tooltip"
              data-tooltip-html={`WAR은 Wins Above Replacement의 약자로 대체 선수 대비 승리 기여도입니다. 대체선수에 비해 얼마나 많은 승리에 기여했는가를 나타내는 수치입니다.<br/> 예를 들어 2010년 이대호의 WAR은 8.76이었는데 이는 2010년 이대호가 대체선수에 비해 팀에 8.76승을 더 안겨주었다는 뜻입니다.`}
            />
          </div>
          <span className={indicatorContentStyle}>{player?.WAR}</span>
        </li>
      </ul>
    </section>
  );
}
