import { TSideMenu } from "./dataPlayer";

export const mypageSideMenuData: TSideMenu = {
  title: "Mypage",
  menuList: [
    {
      menuName: "개인정보수정",
      menuUrl: "/mypage/editprofile",
      keyword: "editprofile",
    },
    {
      menuName: "포인트 적립 사용 내역",
      menuUrl: "/mypage/point",
      keyword: "point",
    },
  ],
};
