"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import UserMenu from "./UserMenu";
import MegaDropdown from "./MegaDropdown";
import { menus } from "@/data/Header/menus";
import { loginUserTest, useUserState } from "@/store/user";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { userData, setUserData, resetUserData } = useUserState();

  const handleLogin = () => {
    setUserData(loginUserTest); // 임시 사용자 정보
  };

  const handleLogout = () => {
    resetUserData(); // 로그아웃
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

  return (
    <>
      <header className="bg-white sticky top-0 left-0 w-full z-20">
        <div className="sm:px-6 lg:px-8">
          <div className="hidden md:flex h-16 relative border-b border-gray-200">
            {/* 좌측 로고 */}
            <div className="absolute left-0 top-1/2 translate-y-[-50%]">
              <Link href="/">
                <Image
                  src="/img/img-logo-black.svg"
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
            <UserMenu
              user={userData}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          </div>
        </div>
        {/* 메가드롭다운 메뉴 */}
        {isDropdownVisible && (
          <MegaDropdown
            menus={menus}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
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
    </>
  );
}
