export type TSideMenu = {
  title: string;
  params?: string;
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
