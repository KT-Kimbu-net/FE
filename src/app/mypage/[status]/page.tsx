import Point from "@/components/MyPage/Point/Point";
import EditProfile from "@/components/MyPage/EditProfile";
type TPageProps = {
  params: {
    status: string;
  };
};

export default function DynamicMyPage(props: TPageProps) {
  const modalContent: { [key: string]: JSX.Element } = {
    editprofile: <EditProfile />,
    point: <Point />,
  };
  return (
    <>
      <div className="w-full flex items-center justify-start flex-col">
        {modalContent[props.params.status]}
      </div>
    </>
  );
}
