import SideMenu from "@/components/Layouts/SideMenu";
import { playerSideMenuData } from "@/data/sideMenu/dataPlayer";

type TPageProps = {
  children: React.ReactNode;
  params: {
    position: string;
  };
};

export default function layout(props: TPageProps) {
  return (
    <>
      <SideMenu {...playerSideMenuData} params={props.params.position} />
      <div>{props.children}</div>
    </>
  );
}
