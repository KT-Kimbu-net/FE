import SideMenu from "@/components/Layouts/SideMenu";
import SubHeader from "@/components/Layouts/SubHeader";
import { playerSideMenuData } from "@/data/sideMenu/dataPlayer";

type TPageProps = {
  children: React.ReactNode;
  params: {
    position: string;
  };
};

type TPlayerSubHeaderData = {
  title: string;
  subTitle: string;
};

const playerSubHeaderData: { [key: string]: TPlayerSubHeaderData } = {
  coach: {
    title: "코치",
    subTitle: "코치들을 소개합니다.",
  },
  catcher: {
    title: "포수",
    subTitle: "포수들을 소개합니다.",
  },
  pitcher: {
    title: "투수",
    subTitle: "투수들을 소개합니다.",
  },
  infielder: {
    title: "내야수",
    subTitle: "내야수들을 소개합니다.",
  },
  outfielder: {
    title: "외야수",
    subTitle: "외야수들을 소개합니다.",
  },
};

export default function layout(props: TPageProps) {

  return (
    <>
      <SubHeader title={playerSubHeaderData[props.params.position].title} subTitle={playerSubHeaderData[props.params.position].subTitle} />
      <SideMenu {...playerSideMenuData} params={props.params.position} />
      <div className="mt-3">{props.children}</div>
    </>
  );
}
