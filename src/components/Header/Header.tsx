"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import { BiLogOut } from "react-icons/bi"; // 로그아웃
import { dummyCurrentUser } from "@/data/modal/currentUserDummy";
import { UserData } from "@/types/api";

interface MenuItem {
  name: string;
  link: string;
}

interface Menu {
  title: string;
  items: MenuItem[];
}

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [user, setUser] = useState<null | UserData>(null);

  const handleLogin = () => {
    setUser(dummyCurrentUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const menus: Menu[] = [
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

  return (
    <header className="bg-white sticky top-0 left-0 w-full z-20">
      <div className="sm:px-6 lg:px-8">
        <div className="hidden md:flex h-16 relative border-b border-gray-200">
          {/* 좌측 로고 */}
          <div className="absolute left-0 top-1/2 translate-y-[-50%]">
            <Link href="/">
              <Image
                src="/img-logo-black.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* 중앙 메뉴 항목들 */}
          <nav
            className="flex justify-center flex-grow"
            onMouseEnter={handleMouseEnter}
          >
            {menus.map((menu, index) => (
              <div key={index} className="flex items-center text-center">
                <Link
                  href={menu.title === "Shop" ? "/shop" : "#"}
                  className={`font-semibold hover:bg-gray-200 rounded-lg p-2 w-28 ${
                    menu.title === "Ticket" || menu.title === "Shop"
                      ? "text-red-600"
                      : "text-black"
                  }`}
                >
                  {menu.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* 우측 버튼들 */}
          <div className="ml-auto flex items-center space-x-2 absolute right-0 top-1/2 translate-y-[-50%]">
            {user ? (
              <>
                <span className="text-gray-500 text-sm font-normal">
                  {user.credit.creditAmount} point
                </span>
                <span className="hover:text-gray-800 text-gray-500">|</span>
                <span className="text-gray-500 text-sm font-normal">
                  {user.userId}
                </span>
                {/* <button onClick={handleLogout} className="flex items-center"> */}
                <BiLogOut
                  onClick={handleLogout}
                  className="text-gray-500 text-lg cursor-pointer"
                />
                {/* </button> */}
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="bg-blue-300 text-white mr-5"
                >
                  test
                </button>
                <Link
                  href="/login"
                  className="hover:text-gray-800 text-gray-500 text-sm font-normal"
                >
                  로그인
                </Link>
                <span className="hover:text-gray-800 text-gray-500">|</span>
                <Link
                  href="/signup"
                  className="text-gray-500 text-sm font-normal"
                >
                  회원가입
                </Link>
              </>
            )}
            <Link
              href="http://kt-sports.co.kr/sports/site/main.do"
              className="bg-gray-200 text-black font-normal px-3 py-1 rounded-3xl flex items-center hover:bg-gray-300"
              passHref
            >
              <img
                src="/img-logo-ktsports.svg"
                alt="Icon"
                className="w-20 h-15"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* 메가드롭다운 메뉴 */}
      {isDropdownVisible && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-full w-full bg-white shadow-lg z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full m-auto">
            <div className="flex justify-center py-4">
              {menus.map((submenu) => (
                <ul className="text-center w-28 flex flex-col">
                  {submenu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="py-1">
                      <Link href={item.link}>
                        <div className="text-black hover:bg-gray-200 block py-1">
                          {item.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* 모바일 뷰 */}
      <HeaderMobile
        menus={menus}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isUserMenuOpen={isUserMenuOpen}
        toggleUserMenu={toggleUserMenu}
      />
    </header>
  );
}
