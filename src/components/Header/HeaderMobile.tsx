// components/MobileView.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import imgLogoBlack from "@/img/img-logo-black.svg";
import Image from "next/image";

interface MenuItem {
  name: string;
  link: string;
}

interface Menu {
  title: string;
  items: MenuItem[];
}

interface MobileViewProps {
  menus: Menu[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isUserMenuOpen: boolean;
  toggleUserMenu: () => void;
}

export default function HeaderMobile({
  menus,
  isMenuOpen,
  toggleMenu,
  isUserMenuOpen,
  toggleUserMenu,
}: MobileViewProps) {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

  const toggleSubMenu = (index: number) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center h-16 px-4">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <Link href="/" className="flex item">
          <Image src={imgLogoBlack} alt="Logo" width={100} height={100} />
        </Link>
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          onClick={toggleUserMenu}
        >
          {isUserMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              fill="none"
              viewBox="0 0 24 19"
            >
              <path
                fill="#000"
                d="M5.5 5a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zm7 0h-1v2h1a3 3 0 010 6h-1v2h1a5 5 0 100-10zM0 17a5 5 0 015-5h7a5 5 0 015 5v2h-2v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2H0v-2zm24 0a5 5 0 00-5-5h-1v2h1a3 3 0 013 3v2h2v-2z"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menus.map((menu, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-black block hover:bg-gray-200 rounded-lg p-2"
                  onClick={() => toggleSubMenu(index)}
                >
                  {menu.title}
                </a>
                <button onClick={() => toggleSubMenu(index)}>
                  {openMenus[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="m1 7.4l.7.7l6-6l6 6l.7-.7L8.1 1h-.7zm0 6l.7.7l6-6l6 6l.7-.7L8.1 7h-.7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {openMenus[index] && (
                <ul className="pl-4">
                  {menu.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        prefetch={false}
                        href={item.link}
                        className="text-black block hover:bg-gray-200 rounded-lg p-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      {isUserMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/login"
            className="text-black block hover:bg-gray-200 rounded-lg p-2"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="text-black block hover:bg-gray-200 rounded-lg p-2"
          >
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}
