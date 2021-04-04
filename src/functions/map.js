import { setDefaultOptions, loadModules } from "esri-loader";

setDefaultOptions({ css: true });

let map;
let mapview;
let mapViewConstructor;
let graphicsLayer;
let GraphicObj;
let webMap;
let mapCreator;
let layerCreator;
let SublayerCreator;
let NewPolygon;
let mercator;
let search;
let basemaps;
let expand;
let compass;
let legend;
let measurment;
loadModules([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/WebMap",
  "esri/layers/MapImageLayer",
  "esri/layers/support/Sublayer",
  "esri/geometry/Polygon",
  "esri/geometry/support/webMercatorUtils",
  "esri/widgets/Search",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/widgets/Compass",
  "esri/widgets/Legend",
  "esri/widgets/Measurement",
]).then(
  ([
    Map,
    MapView,
    Graphic,
    GraphicsLayer,
    WebMap,
    Layer,
    Sublayer,
    Polygon,
    Mercator,
    Search,
    BasemapGallery,
    Expand,
    Compass,
    Legend,
    Measurment,
  ]) => {
    measurment = Measurment;
    legend = Legend;
    compass = Compass;
    expand = Expand;
    basemaps = BasemapGallery;
    search = Search;
    mercator = Mercator;
    NewPolygon = Polygon;
    mapCreator = Map;
    layerCreator = Layer;
    SublayerCreator = Sublayer;
    map = new Map({ basemap: "gray" });

    mapview = new MapView({
      container: "esrimap",
      map: map,
      center: [38.9968, 34.8021],
      zoom: 6,
    });

    graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    GraphicObj = Graphic;

    webMap = WebMap;

    mapViewConstructor = MapView;
  }
);

export {
  legend,
  measurment,
  map,
  mapview,
  graphicsLayer,
  GraphicObj,
  webMap,
  mapViewConstructor,
  mapCreator,
  layerCreator,
  SublayerCreator,
  NewPolygon,
  mercator,
  search,
  basemaps,
  expand,
  compass,
};
