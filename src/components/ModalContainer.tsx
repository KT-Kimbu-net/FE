"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalState } from "@/store/modal";
import Test from "./Modal/Test";

const ModalLayout = () => {
  const { modalName } = useModalState();
  return (
    <>
      {modalName && (
        <section className="fixed w-full h-full top-0 bg-[#0000008f] z-10"></section>
      )}
    </>
  );
};

const ModalContent = (): JSX.Element => {
  const { modalName } = useModalState();

  const modalContent: { [key: string]: JSX.Element } = {
    test: <Test />,
  };

  return (
    <>
      {modalName && (
        <section className="z-20 flex w-screen-50 min-w-[325px] max-w-[700px] flex-col jusfify-content center fixed top-1/2 left-1/2 text-center px-2 py-2.5 xs:px-2.5 xs:py-3 sm:px-3 sm:py-4 md:px-3.5 md:py-4.5 lg:px-4 lg:py-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-[Pretendard-SemiBold]">
          {modalName ? modalContent[modalName] : null}
        </section>
      )}
    </>
  );
};

export default function ModalContainer() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (typeof window === "undefined") return <></>;
  if (!isMount) return <></>;

  return (
    <>
      {createPortal(
        <ModalLayout />,
        document.getElementById("modalLayout") as HTMLElement
      )}
      {createPortal(
        <ModalContent />,
        document.getElementById("modalContent") as HTMLElement
      )}
    </>
  );
}
