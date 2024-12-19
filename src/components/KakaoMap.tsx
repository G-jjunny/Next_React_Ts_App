import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  setCustomValue,
  latitude,
  longitude,
  detailPage = false,
}: KakaoMapProps) => {
  const handlClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    console.log(mouseEvent);
    if (detailPage) return;
    setCustomValue!("latitude", mouseEvent.latLng.getLat());
    setCustomValue!("longitude", mouseEvent.latLng.getLng());
  };

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handlClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
