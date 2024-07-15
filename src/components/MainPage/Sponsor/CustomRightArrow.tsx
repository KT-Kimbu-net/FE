import Image from "next/image";
import rightArrow from "@/img/Sponsor/rightArrow.svg";

export default function CustomRightArrow({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 p-2"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <Image src={rightArrow} alt="sponsor slide right arrow" />
    </button>
  );
}
