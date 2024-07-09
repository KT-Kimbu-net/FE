export type TSideMenu = {
  title: string;
  params?: string;
  // menuList: TMenuList[];
  menuList: TSideMenuContent[];
};

export type TSideMenuContent = {
  menuName: string;
  menuUrl: string;
  keyword?: string;
  childs?: TSideMenuContent[];
};

export const playerSideMenuData: TSideMenu = {
  title: "Player",
  menuList: [
    { menuName: "코칭스탭", menuUrl: "/player/coach", keyword: "coach" },
    { menuName: "투수", menuUrl: "/player/pitcher", keyword: "pitcher" },
    {
      menuName: "타자",
      menuUrl: "/player/catcher",
      childs: [
        { menuName: "포수", menuUrl: "/player/catcher", keyword: "catcher" },
        {
          menuName: "내야수",
          menuUrl: "/player/infielder",
          keyword: "infielder",
        },
        {
          menuName: "외야수",
          menuUrl: "/player/outfielder",
          keyword: "outfielder",
        },
      ],
    },
  ],
};


export const mypageSideMenuData: TSideMenu = {
  title: "Player",
  menuList: [
    { menuName: "개인정보수정", menuUrl: "/player/coach", keyword: "coach" },
    { menuName: "크레딧 적립 사용 내역", menuUrl: "/player/pitcher", keyword: "pitcher" },
  ],
};
