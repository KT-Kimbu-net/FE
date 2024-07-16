import Credit from "@/components/MyPage/Credit/Credit";
import EditProfile from "@/components/MyPage/EditProfile";
import Login from "@/components/MyPage/Login/Login";

type TPageProps = {
  params: {
    status: string;
  };
};

export default function DynamicMyPage(props: TPageProps) {
  const modalContent: { [key: string]: JSX.Element } = {
    editProfile: <EditProfile />,
    credit: <Credit />,
  };
  return (
    <>
      <div className="w-full flex items-center justify-start flex-col">
        {modalContent[props.params.status]}
      </div>
    </>
  );
}
