import marker_ani from "@/img/Congestion/marker_ani.svg";
import marker from "@/img/Congestion/marker.svg";

declare global {
  interface Window {
    kakao: any;
  }
}

export function createKakaoMap(markersData: any) {
  const kakaoMapScript = document.createElement("script");
  kakaoMapScript.async = false;
  kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7febf72e32596d10375fb284d60c16f1&autoload=false`;
  document.head.appendChild(kakaoMapScript);

  const onLoadKakaoAPI = () => {
    window.kakao.maps.load(() => {
      const path = "/split_map/";
      const plan = function (x: number, y: number, z: number) {
        y = -y - 1;
        const limit = Math.ceil(3 / Math.pow(2, z));

        if (0 <= y && y < limit && 0 <= x && x < limit) {
          return `${path}${z}_${y}_${x}.png`;
        }
        return "https://i1.daumcdn.net/dmaps/apis/white.png";
      };

      window.kakao.maps.Tileset.add(
        // 커스텀 타일셋
        "PLAN",
        new window.kakao.maps.Tileset(512, 512, plan, "", false, 0)
      );

      const node = document.getElementById("map");
      const map = new window.kakao.maps.Map(node, {
        projectionId: null,
        mapTypeId: window.kakao.maps.MapTypeId.PLAN,
        $scale: false,
        center: new window.kakao.maps.Coords(500, -300),
        // center: new window.kakao.maps.LatLng(520, 520), // 머냐
        level: 0,
      });

      // 커스텀 마커 이미지 설정
      // const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
      const imageSrc = marker;
      const imageSize = new window.kakao.maps.Size(54, 59);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(
        "/img/marker_ani.svg", // public 경로만 됨
        imageSize,
        imageOption
      );

      // 마커 추가
      markersData.forEach(
        (markerData: { x: any; y: any; title: any; content: any }) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.Coords(markerData.x, markerData.y),
            title: markerData.title,
            image: markerImage, // 마커 이미지 설정
          });
          marker.setMap(map);

          const infowindow = new window.kakao.maps.InfoWindow({
            content: markerData.content,
          });
          infowindow.open(map, marker);
        }
      );
    });
  };

  kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
}
