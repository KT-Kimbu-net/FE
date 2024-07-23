import { StaticImageData } from "next/image";
import gate from "@/img/Congestion/gate.svg";
import store from "@/img/Congestion/store.svg";
import ticket from "@/img/Congestion/ticket.svg";
import toilet from "@/img/Congestion/toilet.svg";
import marker from "@/img/Congestion/marker.svg";

export type TItem = {
  src: StaticImageData;
  alt: string;
  label: string;
  color?: string;
};
export const categoryItems: TItem[] = [
  { src: gate, alt: "gate icon", label: "게이트" },
  { src: store, alt: "store icon", label: "매점" },
  { src: ticket, alt: "ticket icon", label: "매표소" },
  { src: toilet, alt: "toilet icon", label: "화장실" },
];
export const congestionItems: TItem[] = [
  { src: marker, alt: "", label: "혼잡", color: "red" },
  { src: marker, alt: "", label: "보통", color: "#EAB308" },
  { src: marker, alt: "", label: "여유", color: "green" },
];
export type Marker = {
  x: number;
  y: number;
  title: string;
  category: string;
  congestion: string;
  imageSrc?: string;
};
