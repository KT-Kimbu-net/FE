import Header from "@/components/header/Header";
import Image from "next/image";

export default function page() {
  return (
    <>
      <main>
        <div className="relative w-full" style={{ height: "800px" }}>
          <Image
            src="/2024_season_bg_web.png"
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            alt={""}
          />
        </div>
      </main>
    </>
  );
}
