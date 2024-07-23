declare global {
  interface Window {
    kakao: any;
  }
}

export function createKakaoMap(markersData: any[]) {
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
        "PLAN",
        // new window.kakao.maps.Tileset(512, 512, plan, "", false, 0, 2)
        new window.kakao.maps.Tileset(512, 512, plan, "", false, 0)
      );

      const node = document.getElementById("map");
      const map = new window.kakao.maps.Map(node, {
        projectionId: null,
        mapTypeId: window.kakao.maps.MapTypeId.PLAN,
        $scale: false,
        center: new window.kakao.maps.Coords(500, -300),
        level: 0,
      });

      // 마커와 커스텀 오버레이 추가
      markersData.forEach((markerData) => {
        const markerImage = new window.kakao.maps.MarkerImage(
          markerData.imageSrc,
          new window.kakao.maps.Size(54, 59),
          { offset: new window.kakao.maps.Point(27, 69) }
        );

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.Coords(markerData.x, markerData.y),
          title: markerData.title,
          image: markerImage,
        });
        marker.setMap(map);

        const content =
          '<div class="customoverlay">' +
          '    <span class="title">' +
          markerData.title +
          "</span>" +
          "</div>";
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: new window.kakao.maps.Coords(markerData.x, markerData.y),
          content: content,
          yAnchor: 1.5, // 마커와의 거리
        });
      });
    });
  };

  kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
}
