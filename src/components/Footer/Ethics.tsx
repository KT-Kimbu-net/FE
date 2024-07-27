import React from "react";

interface EthicsProps {
  onClose: () => void;
  content: string;
}

export default function Ethics({ onClose, content }: EthicsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-4 sm:p-8 rounded-lg max-w-lg w-4/5">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg sm:text-xl font-semibold">{content}</h4>
          <button className="text-gray-500" onClick={onClose}>
            닫기
          </button>
        </div>
        <div className="text-gray-700 text-xs sm:text-base">
          <p>
            {`"사이버 신문고란" 건전한 기업윤리원칙에서 벗어나는 임직원 및 선수의`}
            부정, 부조리행위를 신고하거나,
            <br />
            윤리적인 측면에서 회사경영 등의 개선사항 및 제안사항을 접수하는
            제도입니다.
            <br />
            단, 사실에 근거하지 않은 비방, 개인 사생활과 관련된 사항은 처리 되지
            않습니다.
            <br />
            <br />
            횡령, 배임, 공갈, 절도, 금품수수, 향응 등 kt sports 임직원 및 선수의
            비리행위를 아래 전화, 이메일, 서신으로
            <br />
            제보해주시기 바랍니다.
            <br />
            <br />
            <strong>실명으로 접수하신 경우에 조사를 원칙으로 합니다.</strong>
            <br />
            - 익명의 내용이더라도 내용이 구체적이고, 사실 근거가 명확한 경우에는
            조사를 실시합니다.
            <br />
            <br />
            전화 031-247-9720
            <br />
            이메일 clean365@kt.com
            <br />
            서신 수원시 장안구 경수대로 893 kt sports 윤리경영팀
            <br />
            <br />
            윤리위반 신고방법
            <br />
            - 제보시엔 신고하고자 하는 사항을 육하원칙에 따라 상세히 작성하고,
            관련 증거자료를 첨부하여 신고하시면 됩니다.
            <br />
            <br />
            제보자 보호
            <br />
            ① 제보자의 보호는 실명 및 정확한 증거제출의 경우를 원칙으로 하고
            있습니다.
            <br />
            ② 제보자에 대한 보호사항
            <br />
            - 제보자 신분
            <br />
            - 제보자가 제시한 증거 또는 기타 제보관련 정보
            <br />
            <br />
            보호정책
            <br />
            ① 제보자 및 제보내용은 대외비로 엄격히 처리되며, 제보시스템은 안전한
            보호체계로 보호되고 있습니다.
            <br />② 제보담당은 제보에 대해 비밀준수를 엄수할 것을 서약한 제약된
            인원에 의해 운용되고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
