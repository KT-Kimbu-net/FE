import SideMenu from "@/components/Layouts/SideMenu";
import SubHeader from "@/components/Layouts/SubHeader";

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
