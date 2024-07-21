"use client";
import { createKakaoMap } from "@/utils/kakaoMap";
import { useEffect, useState } from "react";
import FloatingList from "@/components/Congestion/FloatingList";
import FloatingToggle from "@/components/Congestion/FloatingToggle";

export default function page() {
  const [markers, setMarkers] = useState([
    { x: 500, y: -100, title: "Marker 1", content: "Content 1" }, // 조그만 왼쪽으로
    { x: 1100, y: -750, title: "Marker 2", content: "Content 2" },
    { x: 150, y: -200, title: "Marker 3", content: "toilet" }, // 좀 더 위로
    { x: 900, y: -400, title: "Marker 4", content: "Content 4" },
    { x: 300, y: -600, title: "Marker 5", content: "Content 5" }, // 좀 더 위로
    { x: 1200, y: -300, title: "Marker 6", content: "Content 6" },
    { x: 800, y: -100, title: "Marker 7", content: "Content 7" },
    { x: 400, y: -900, title: "Marker 8", content: "Content 8" },
    { x: 1000, y: -500, title: "Marker 9", content: "Content 9" },
    { x: 600, y: -200, title: "Marker 10", content: "Content 10" },
    // 초기 마커 데이터
  ]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isCongestion, setIsCongestion] = useState(true);

  const handleToggle = () => {
    setIsCongestion(!isCongestion);
  };

  //   const handleCheck = (item: string | number) => {
  //     setCheckedItems((prev) => ({
  //       ...prev,
  //       [item]: !prev[item],
  //     }));
  //   };

  useEffect(() => {
    createKakaoMap(markers);
  }, [markers]);

  const addMarker = () => {
    const newMarker = {
      x: 1200,
      y: -800,
      title: `Marker ${markers.length + 1}`,
      content: `content ${markers.length + 1}`,
    };
    setMarkers([...markers, newMarker]);
  };

  const changeMarker = (category: string) => {
    // 여기에 카테고리에 따라 마커를 변경하는 로직을 추가합니다.
  };

  return (
    <div className="relative container mx-auto px-4 flex justify-center my-5 rounded-2xl">
      <div id="map" style={{ width: "100%", height: "700px" }}></div>
      {/* 플로팅 */}
      <div className="absolute bg-white bg-opacity-50 top-5 left-5 text-gray-700 font-sans text-xl text-center z-20 rounded-3xl py-3 px-3 font-semibold border-spacing-x-5 border border-slate-500 border-b-4 border-r-4 border-opacity-50">
        <div>
          <FloatingToggle
            isCongestion={isCongestion}
            handleToggle={handleToggle}
          />
          <FloatingList isCongestion={isCongestion} />
        </div>
      </div>
      <div id="clickLatlng"></div>
    </div>
  );
}
