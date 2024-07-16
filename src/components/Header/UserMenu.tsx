import React from "react";
import { BiLogOut } from "react-icons/bi"; // 로그아웃
import { UserData } from "@/types/api";
import Link from "next/link";

type UserMenuProps = {
  user: UserData | null;
  handleLogin: () => void;
  handleLogout: () => void;
};

export default function UserMenu({
  user,
  handleLogin,
  handleLogout,
}: UserMenuProps) {
  return (
    <>
      <div className="ml-auto flex items-center space-x-2 absolute right-0 top-1/2 translate-y-[-50%]">
        {user ? (
          <>
            <span className="text-gray-500 text-sm font-normal">
              {user.creditAmount} point
            </span>
            <span className="hover:text-gray-800 text-gray-500">|</span>
            <span className="text-gray-500 text-sm font-normal">
              {user.userId}
            </span>
            <BiLogOut
              onClick={handleLogout}
              className="text-gray-500 text-lg cursor-pointer"
            />
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="hover:text-gray-800 text-gray-500 text-sm font-normal"
            >
              로그인
            </Link>
            <span className="hover:text-gray-800 text-gray-500">|</span>
            <Link href="/signup" className="text-gray-500 text-sm font-normal">
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
            src="/img/img-logo-ktsports.svg"
            alt="Icon"
            className="w-20 h-15"
          />
        </Link>
      </div>
    </>
  );
}
