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
      <SubHeader title="마이페이지" subTitle="나의 페이지" />
      <div className=" relative">
        <SideMenu {...mypageSideMenuData} />
        {children}
      </div>
    </>
  );
}
