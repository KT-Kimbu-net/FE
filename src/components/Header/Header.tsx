"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import UserMenu from "./UserMenu";
import MegaDropdown from "./MegaDropdown";
import { menus } from "@/data/Header/menus";
import { useChatState } from "@/store/chatting";
import { chatSocket } from "@/socket/ChatSocket";
import { deleteCookie, getCookie } from "cookies-next";
import { useUserState } from "@/store/user";
import imgLogoBlack from "@/img/img-logo-black.svg";
import { useGameBetState } from "@/store/resultBet";
import { getMyDataAction } from "@/libs/action/GetMyDataAction";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { userData, resetUserData, setUserData } = useUserState();
  const router = useRouter();
  const { setSelectBet } = useGameBetState();
  const { setIsShow, isShow } = useChatState((state) => ({
    isShow: state.isShow,
    setIsShow: state.setIsShow,
  }));
  const getMyDataApiHandler = async () => {
    const data = await getMyDataAction();
    if (data?.status === 200) {
      chatSocket.connect();
      setUserData(data.data);
      setSelectBet(data?.data.gamePredict.choose);
    }
  };

  const handleLogout = () => {
    if (isShow) setIsShow();
    deleteCookie("token");
    chatSocket.disconnect();
    resetUserData();
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
    if (getCookie("token")) {
      if (isUserMenuOpen) setIsUserMenuOpen(!isUserMenuOpen);
      else router.push("/mypage/editprofile");
    } else setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    setIsLoading(true);
    if (getCookie("token")) {
      getMyDataApiHandler();
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <header className="bg-white sticky top-0 left-0 w-full z-20">
        <div className="sm:px-6 lg:px-8">
          <div className="hidden xl:flex h-16 relative border-b border-gray-200">
            {/* 좌측 로고 */}
            <div className="absolute left-0 top-1/2 translate-y-[-50%]">
              <Link href="/">
                <Image
                  src={imgLogoBlack}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
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
                    prefetch={false}
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
            {!isLoading && (
              <UserMenu
                user={userData}
                handleLogout={handleLogout}
                isLoading={isLoading}
              />
            )}
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
