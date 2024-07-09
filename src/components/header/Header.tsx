"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

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
        { name: "월페이퍼", link: "/ktwiz/wallpaper" },
      ],
    },
    {
      title: "wiz park",
      items: [
        { name: "수원 park", link: "/wizpark/intro" },
        { name: "주차 예약", link: "/wizpark/parking" },
        { name: "찾아오기", link: "/wizpark/location" },
        { name: "익산야구장", link: "/wizpark/iksan" },
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
        { name: "응원가", link: "/player/song" },
        { name: "응원가 저작권", link: "/player/song-copyright" },
      ],
    },
    {
      title: "Media",
      items: [
        { name: "wiz 뉴스", link: "/media/wiznews" },
        { name: "wiz 스토리", link: "/media/wizstory" },
        { name: "시구자 정보", link: "/media/firstpitch" },
        { name: "wiz 포토", link: "/media/photos" },
        { name: "하이라이트", link: "/media/highlight" },
        { name: "Live 영상모음", link: "/media/live/pts" },
      ],
    },
    {
      title: "Ticket",
      items: [],
    },
  ];

  return (
    <header className="relative bg-white top-0 left-0 w-full z-50">
      <div className="hidden md:block relative sm:px-6 lg:px-8">
        <div className="hidden justify-center md:flex h-16 relative border-b border-gray-200">
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
                  href="#"
                  className="text-black font-semibold hover:bg-gray-200 rounded-lg p-2 w-28"
                >
                  {menu.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* 우측 버튼들 */}
          <div className="ml-auto flex items-center space-x-4 absolute right-0 top-1/2 translate-y-[-50%]">
            <Link href="/login" className="text-black font-normal">
              로그인
            </Link>
            <Link href="/signup" className="text-black font-normal">
              회원가입
            </Link>
            <button className="text-black font-normal">다른 페이지</button>
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
              {menus.map((submenu, submenuIndex) => (
                <div
                  key={submenuIndex}
                  className={`${
                    submenuIndex > 0 ? "border-l border-gray-300" : ""
                  }`}
                >
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
                </div>
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
