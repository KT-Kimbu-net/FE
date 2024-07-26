type MenuItem = {
  name: string;
  link: string;
};

export type Menu = {
  title: string;
  items: MenuItem[];
};

export const menus: Menu[] = [
  {
    title: "kt wiz",
    items: [
      { name: "kt wiz는?", link: "/ktwiz/about" },
      { name: "구단 BI", link: "/ktwiz/bi/symbol" },
      { name: "회원 정책", link: "/ktwiz/policy/regular" },
      { name: "스폰서", link: "/ktwiz/sponsor" },
      { name: "wiz공지사항", link: "/ktwiz/notice" },
    ],
  },
  {
    title: "wiz park",
    items: [
      { name: "야구장", link: "/wizpark/intro" },
      { name: "주차 예약", link: "/wizpark/parking" },
      { name: "찾아오기", link: "/wizpark/location" },
      { name: "실시간 혼잡도", link: "/wizpark/congestion" },
    ],
  },
  {
    title: "Game",
    items: [
      { name: "정규리그", link: "/game/regular/schedule" },
      { name: "퓨처스리그", link: "/game/futures/schedule" },
    ],
  },
  {
    title: "Player",
    items: [
      { name: "코칭스텝", link: "/player/coach" },
      { name: "투수", link: "/player/pitcher" },
      { name: "타자", link: "/player/catcher" },
      { name: "응원단", link: "/player/cheer" },
    ],
  },
  {
    title: "Media",
    items: [
      { name: "wiz소식", link: "/media/wiznews" },
      { name: "wiz포토", link: "/media/photos" },
      { name: "wiz하이라이트", link: "/media/highlight" },
      { name: "응원가", link: "/media/song" },
    ],
  },
  {
    title: "Ticket",
    items: [
      { name: "티켓 예매", link: "/ticket/reservation" },
      { name: "단체관람", link: "/ticket/group" },
      { name: "좌석 배치도", link: "/ticket/seatmap" },
    ],
  },
  {
    title: "Shop",
    items: [],
  },
];
