import FloatingItem from "./FloatingItem";
import gate from "@/img/Congestion/gate.svg";
import store from "@/img/Congestion/store.svg";
import ticket from "@/img/Congestion/ticket.svg";
import toilet from "@/img/Congestion/toilet.svg";
import marker from "@/img/Congestion/marker.svg";

import { StaticImageData } from "next/image";

export type TItem = {
  src: StaticImageData;
  alt: string;
  label: string;
  color?: string;
};

const categoryItems: TItem[] = [
  { src: gate, alt: "gate icon", label: "게이트" },
  { src: store, alt: "store icon", label: "편의점" },
  { src: ticket, alt: "ticket icon", label: "매표소" },
  { src: toilet, alt: "toilet icon", label: "화장실" },
];
const congestionItems: TItem[] = [
  { src: marker, alt: "", label: "혼잡", color: "text-red-600" },
  { src: marker, alt: "", label: "보통", color: "text-yellow-500" },
  { src: marker, alt: "", label: "여유", color: "text-green-500" },
];

type FloatingListProps = {
  isCongestion: boolean;
};

const FloatingList = ({ isCongestion }: FloatingListProps) => {
  const items = isCongestion ? congestionItems : categoryItems;
  return (
    <ul className="space-y-2 pb-5">
      {items.map((item, index) => (
        <FloatingItem
          key={index}
          src={item.src}
          alt={item.alt}
          label={item.label}
          color={item.color}
          isCongestion={isCongestion}
        />
      ))}
    </ul>
  );
};

export default FloatingList;
