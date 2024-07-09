import { useEffect, useState } from "react";

export default function CreditDelete() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className="flex items-center w-full justify-center">
        <table className="font-[100]">
          <tr className="bg-[#FAFAFA] h-[50px] border-[#BBBBBB] border-t-[2px]">
            <th className="w-[200px] text-center">소멸일자</th>
            <th className="w-[400px] text-center">상세내용</th>
            <th className="w-[200px] text-center">소멸 포인트</th>
          </tr>
          <tr className="border-[#EEEEEE] border-y-[1px] h-[50px] font-[300]">
            <th className="font-[400]">2024.06.28 16:00</th>
            <th className="font-[400]">안녕하세요 감사합니다.</th>
            <th className="font-[400]">1000 point</th>
          </tr>
          <tr className="border-[#EEEEEE] border-y-[1px] h-[50px]">
            <th className="font-[400]">2024.06.28 16:30</th>
            <th className="font-[400]">안녕하세요 감사합니다.</th>
            <th className="font-[400]">3000 point</th>
          </tr>
        </table>
      </div>
    </>
  );
}
