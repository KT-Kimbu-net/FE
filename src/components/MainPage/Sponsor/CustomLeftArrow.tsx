import Image from "next/image";
import leftArrow from "@/img/Sponsor/leftArrow.svg";

export default function CustomLeftArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 p-2"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <Image src={leftArrow} alt="sponsor slide right arrow" />
    </button>
  );
}
