import SideMenu from "@/components/Layouts/SideMenu";
import SubHeader from "@/components/Layouts/SubHeader";
import { mypageSideMenuData } from "@/data/sideMenu/dataMypage";
import { redirect } from "next/navigation";

type TPageProps = {
  children: React.ReactNode;
  params: {
    status: string;
  };
};

type TSubHeader = {
  title: string;
  subTitle: string;
};

export default function layout(props: TPageProps) {
  const subHeaderontent: { [key: string]: TSubHeader } = {
    editprofile: {
      title: "마이 프로필",
      subTitle: "나의 정보를 확인할 수 있어요.",
    },
    point: {
      title: "크레딧 사용,적립 내역",
      subTitle: "크레딧 사용 & 적립 내역 조회",
    },
  };
  if (!subHeaderontent[props.params.status]) {
      return redirect("/");
  }
  return (
    <>
      <SideMenu {...mypageSideMenuData} params={props.params.status} />
      <SubHeader
        title={subHeaderontent[props.params.status].title}
        subTitle={subHeaderontent[props.params.status].subTitle}
      />
      <div>{props.children}</div>
    </>
  );
}
