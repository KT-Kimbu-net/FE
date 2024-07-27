"use client";
import { createKakaoMap } from "@/utils/congestion/kakaoMap";
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
      <div id="map" className="w-full h-svh"></div>
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
      <div>
        <button className="absolute z-10 bottom-5 right-5 bg-blue-400 p-4 rounded-full shadow-2xl animate-bounce pointer-events-none">
          <svg
            className="w-16 h-16 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 23.414L7.586 19L9 17.586l2 2V13H4.414l2 2L5 16.414L.586 12L5 7.586L6.414 9l-2 2H11V4.414l-2 2L7.586 5L12 .586L16.414 5L15 6.414l-2-2V11h6.586l-2-2L19 7.586L23.414 12L19 16.414L17.586 15l2-2H13v6.586l2-2L16.414 19z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div id="clickLatlng"></div>
    </div>
  );
}
