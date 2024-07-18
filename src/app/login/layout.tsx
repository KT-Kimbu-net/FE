
import SubHeader from "@/components/Layouts/SubHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative flex-grow flex flex-col">
        <SubHeader title="로그인" subTitle="로그인을 해주세요" />
        {children}
      </div>
    </>
  );
}
