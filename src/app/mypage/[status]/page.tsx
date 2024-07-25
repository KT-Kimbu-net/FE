"use client";
import Point from "@/components/MyPage/Point/Point";
import EditProfile from "@/components/MyPage/EditProfile";
import { useUserState } from "@/store/user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMyDataAction } from "@/libs/action/GetMyDataAction";
import { getCookie } from "cookies-next";
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

  const router = useRouter();
  const { setUserData } = useUserState();

  const getMyDataApiHandler = async () => {
    const data = await getMyDataAction();
    if (data?.status === 200) {
      setUserData(data.data);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (getCookie("token")) {
      getMyDataApiHandler();
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-start flex-col">
        {modalContent[props.params.status]}
      </div>
    </>
  );
}
