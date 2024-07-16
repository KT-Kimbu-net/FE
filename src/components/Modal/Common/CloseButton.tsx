import React from "react";
import { IoIosClose } from "react-icons/io";
import { useModalState } from "@/store/modal";
type CloseButtonProps = {
  textColor?: string;
  onClick?: () => void;
};

export default function CloseButton({
  textColor = "text-white",
  onClick,
}: CloseButtonProps) {
  const { setModalName } = useModalState();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setModalName(null);
    }
  };

  return (
    <div className="absolute top-0 right-0 z-10">
      <IoIosClose
        className={`text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px] ${textColor}`}
        onClick={handleClick}
      />
    </div>
  );
}
