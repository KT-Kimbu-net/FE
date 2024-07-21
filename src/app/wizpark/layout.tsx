import SubHeader from "@/components/Layouts/SubHeader";
import { Noto_Sans_KR } from "next/font/google";
import { Jua } from "next/font/google";
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

const jua = Jua({ weight: "400", subsets: ["latin"] });
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader
        title={"혼잡도"}
        subTitle={"구장 실시간 혼잡도를 알려드립니다."}
      />
      <div className={`${jua.className}`}>{children}</div>
    </>
  );
}
