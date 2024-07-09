import SideMenu from "@/components/layout/SideMenu";
import SubHeader from "@/components/layout/SubHeader";
import SubMenu from "@/components/layout/SubMenu";
import { mypageSideMenuData } from "@/data/sideMenu/dataPlayer";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader title="마이페이지" subTitle="나의 페이지" />
      <div className=" relative">
        <SideMenu {...mypageSideMenuData} />
        {children}
      </div>
    </>
  );
}
