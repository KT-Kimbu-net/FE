import SideMenu from "@/components/Layouts/SideMenu";
import SubHeader from "@/components/Layouts/SubHeader";
import SubMenu from "@/components/Layouts/SubMenu";
import { mypageSideMenuData } from "@/data/sideMenu/dataPlayer";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative flex-grow flex flex-col">
        <SubHeader title="로그인" subTitle="로그인을 해주세요" />
        {/* <SideMenu {...mypageSideMenuData} /> */}
        {children}
      </div>
    </>
  );
}
