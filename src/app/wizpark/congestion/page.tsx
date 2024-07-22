"use client";
import { createKakaoMap } from "@/utils/kakaoMap";
import { useEffect, useState } from "react";
import FloatingList from "@/components/Congestion/FloatingList";
import FloatingToggle from "@/components/Congestion/FloatingToggle";
import useCheckboxState from "@/hooks/useChckboxState";
import { categoryItems, congestionItems, Marker } from "@/types/congestion";
import congestionAction from "@/libs/action/CongestionAction";

export default function page() {
  const [isCongestion, setIsCongestion] = useState(true);
  const items = [...categoryItems, ...congestionItems];
  const [checkedItems, toggleCheck] = useCheckboxState(items);
  const [markersData, setMarkersData] = useState<Marker[]>([]);

  const handleToggle = () => {
    setIsCongestion(!isCongestion);
  };
  useEffect(() => {
    const fetchMarkersData = async () => {
      try {
        const updatedMarkersData = await congestionAction();
        setMarkersData(updatedMarkersData);
      } catch (error) {
        console.error("Error fetching markers data:", error);
      }
    };

    fetchMarkersData();
  }, []);

  useEffect(() => {
    const filteredMarkers = markersData.filter(
      (marker: { category: string; congestion: string }) => {
        const categoryCondition = checkedItems[marker.category];
        const congestionCondition = checkedItems[marker.congestion];
        return isCongestion ? congestionCondition : categoryCondition;
      }
    );
    createKakaoMap(filteredMarkers);
  }, [checkedItems, isCongestion, markersData]);

  return (
    <div className="relative container mx-auto px-4 flex justify-center my-5 rounded-2xl">
      <div id="map" style={{ width: "100%", height: "700px" }}></div>
      {/* 플로팅 */}
      <div className="absolute bg-white bg-opacity-70 top-5 left-5 text-blue-500 font-sans text-xl text-center z-10 py-3 rounded-3xl font-semibold border-spacing-x-5 border border-blue-500 border-b-4 border-r-4 border-opacity-50">
        <div>
          <FloatingToggle
            isCongestion={isCongestion}
            handleToggle={handleToggle}
          />
          <FloatingList
            isCongestion={isCongestion}
            checkedItems={checkedItems}
            toggleCheck={toggleCheck}
          />
        </div>
      </div>
      <div id="clickLatlng"></div>
    </div>
  );
}
