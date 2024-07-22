"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Ethics from "./Ethics";

export default function Footer() {
  const [isEthicsOpen, setIsEthicsOpen] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<string>("");

  const handleOpenPopup = (content: string) => {
    setPopupContent(content);
    setIsEthicsOpen(true);
  };

  const handleClosePopup = () => {
    setIsEthicsOpen(false);
    setPopupContent("");
  };

  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
            {/* Section 1: Logo and Icons */}
            <ul className="flex flex-col items-center md:mb-10 md:items-start">
              <div className="flex justify-center mb-4">
                <Image
                  src="/img/img-logo-kr.svg"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="w-auto h-auto"
                />
              </div>
              <div className="flex gap-6 pb-10 py-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>

            {/* Section 2: Links and Contact Information */}
            <div className="hidden md:block text-left mb-4 py-5">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex space-x-6">
                  <span
                    onClick={() => handleOpenPopup("개인정보 처리방침")}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                  >
                    개인정보 처리방침
                  </span>
                  <span
                    onClick={() => handleOpenPopup("이용약관")}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                  >
                    이용약관
                  </span>
                  <span
                    onClick={() => handleOpenPopup("이메일무단수집거부")}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                  >
                    이메일무단수집거부
                  </span>
                  <span
                    onClick={() => handleOpenPopup("Sitemap")}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                  >
                    Sitemap
                  </span>
                </div>
                <div className="py-5">
                  <div className="flex flex-col text-sm text-gray-600">
                    <div className="flex">
                      <div className="w-20">
                        <p className="text-sm text-[#0599AF] font-bold">
                          대표번호{" "}
                        </p>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-600 font-bold">
                          1899-5916
                          <span className="text-xs text-gray-300 font-normal">
                            (운영시간: 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기
                            시작 전까지, 월요일 및 주말 미경기 시 미운영)
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <div className="w-20">
                        <p className="text-sm text-[#0599AF] font-bold">
                          주소{" "}
                        </p>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-600 font-normal">
                          경기도 수원시 장안구 경수대로 (조원동) 수원 케이티
                          위즈파크
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-gray-400 font-normal">
                      Copyright 2024 KimBuNet. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Dropdown */}
            {/* 선택시 링크 이동? */}
            <div className="hidden md:block text-center mt-5">
              <select className="border border-gray-300 rounded-md p-2 mb-4">
                <option value="">kt 그룹사 및 관련사이트</option>
                <option value="//www.ktestate.com/">KT estate</option>
                <option value="//www.kttelecop.co.kr/">KT telecop</option>
                <option value="//www.ktsat.net/mainPage.do">KT sat</option>
                <option value="//www.ktengineering.co.kr/">
                  KT engineering
                </option>
                <option value="//www.ktis.co.kr/v2/">KT is</option>
                <option value="//www.ktcs.co.kr/">KT cs</option>
                <option value="//www.ktmns.com/">KT m&amp;s</option>
                <option value="//www.ktlinkus.com/">KT linkus</option>
                <option value="//www.ktds.com/index.jsp">KT ds</option>
                <option value="//www.ktnexr.com/">KT NexR</option>
                <option value="//www.initech.com/html/index.html">
                  INITECH
                </option>
                <option value="//www.ktmmobile.com/main.do">kt M mobile</option>
                <option value="//www.kthcorp.com/index">kt alpha</option>
                <option value="//www.geniemusic.co.kr/">지니뮤직</option>
                <option value="//www.nasmedia.co.kr/">nasmedia</option>
                <option value="//www.kt.com/">KT 닷컴</option>
                <option value="//shop.kt.com/main.do">KT Shop</option>
                <option value="//www.ktcommerce.co.kr/login.jsp">
                  kt commerce
                </option>
                <option value="//www.ktdw.co.kr/">KT 동우회</option>
                <option value="//recruit.kt.com/">인재채용</option>
                <option value="//partner.kt.com/">KT 파트너포탈</option>
              </select>
            </div>

            {/* Mobile Section: Links */}
            <div className="flex flex-col items-center text-center mb-4 md:hidden">
              <div className="flex flex-row space-x-6">
                <span
                  onClick={() => handleOpenPopup("개인정보 처리방침")}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                >
                  개인정보 처리방침
                </span>
                <span
                  onClick={() => handleOpenPopup("이용약관")}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
                >
                  이용약관
                </span>
              </div>
            </div>
          </div>
        </div>
        {isEthicsOpen && (
          <Ethics onClose={handleClosePopup} content={popupContent} />
        )}
      </footer>
    </>
  );
}
