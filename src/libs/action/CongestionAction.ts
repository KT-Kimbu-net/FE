"use server";

import { markersData } from "@/data/congesion/markerData";
import { updateMarkersData } from "@/utils/congestion/updateMarkerData";

export default async function congestionAction() {
  const reportInfo = {
    info: [
      "결승타 최정(1회 2사서 중월 홈런)",
      "홈런 최정21호(1회1점 김동주),최지훈6호(2회2점 김동주),고명준9호(2회1점 김동주)",
      "2회말 상황",
    ],
  };
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/degree`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportInfo),
    });
    if (result.ok) {
      const responseData = await result.json();
      console.log(responseData);
      return updateMarkersData(markersData, responseData);
    } else {
      console.error("Failed to fetch data:", result.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
