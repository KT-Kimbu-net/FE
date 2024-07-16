import { TSideMenu } from "./dataPlayer";

export const mypageSideMenuData: TSideMenu = {
  title: "Mypage",
  menuList: [
    { menuName: "개인정보수정", menuUrl: "/mypage/editprofile", keyword: "editprofile" },
    {
      menuName: "크레딧 적립 사용 내역",
      menuUrl: "/mypage/credit",
      keyword: "credit",
    },
  ],
};

