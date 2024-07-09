import SideMenu from "@/components/layout/SideMenu";
import SubHeader from "@/components/layout/SubHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader title="선수" subTitle="선수들을 소개합니다." />

      {children}
    </>
  );
}
