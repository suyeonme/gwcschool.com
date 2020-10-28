/*global kakao */
import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  width: 50%;
  height: 40vh;
`;

const KaKaoMap = ({ lat, lng }) => {
  const createMarker = useCallback(
    (map) => {
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    },
    [lat, lng],
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.GATSBY_KAKAO_MAP_KEY}&autoload=false`;
    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('kakao-map');
        let options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 5,
        };
        const map = new kakao.maps.Map(container, options);

        createMarker(map);
      });
    };
  }, [lat, lng, createMarker]);

  return <MapContainer id="kakao-map" />;
};

export default KaKaoMap;

KaKaoMap.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
};
