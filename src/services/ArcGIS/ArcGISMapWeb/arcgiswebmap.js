// TODO: Comment out to use ios android
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView"; 

const noop = () => {};

export const webmap = new WebMap({
  basemap: "topo-vector"
});

export const view = new MapView({
  map: webmap,
  center: [-100.33, 55.69],
  zoom: 10,
});

export const initialize = (container, lat, long) => {
  view.container = container;
  view.center[0] = long; 
  view.center[1] = lat; 
  view
    .when()
    .then(_ => {
      console.log("Map and View are ready");
    })
    .catch(noop);
  return () => {
    view.container = null;
  };
};