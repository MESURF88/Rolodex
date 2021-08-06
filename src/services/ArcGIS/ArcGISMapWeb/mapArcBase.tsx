import React from 'react';
import { useRef, useEffect } from 'react'
import { Dimensions } from 'react-native';
import Map from '@esri/react-arcgis';
import MapView from '@esri/react-arcgis';


export const MapDefaultView = () => {
    const mapRef = useRef();
    useEffect(
        () => {
            const map = new Map({
            basemap: "topo-vector"
        });
        
        const view = new MapView({
            map: map,
            center: [-100.33, 25.69],
            zoom: 10,
        });
        },
        []
    );
      return (
        <div ref={mapRef}/>
      );

};
  
