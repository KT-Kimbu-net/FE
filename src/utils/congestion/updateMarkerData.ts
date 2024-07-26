type CongestionData = {
  [key: string]: string;
};

export const updateMarkersData = (
  markers: any,
  congestionData: CongestionData
) => {
  return markers.map(
    (marker: { title: string | number; congestion: CongestionData }) => {
      const updatedCongestion =
        congestionData[marker.title] || marker.congestion;

      let imageSrc;
      switch (updatedCongestion) {
        case "혼잡":
          imageSrc = "/img/marker_ani_red.svg";
          break;
        case "보통":
          imageSrc = "/img/marker_ani_yellow.svg";
          break;
        case "여유":
          imageSrc = "/img/marker_ani_green.svg";
          break;
        default:
          imageSrc = "/img/default_marker.svg"; // 기본 마커 이미지
          break;
      }

      return { ...marker, congestion: updatedCongestion, imageSrc };
    }
  );
};
