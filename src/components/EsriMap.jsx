import React, { useContext, useEffect, useState } from "react";
import {
  map,
  mapview,
  graphicsLayer,
  GraphicObj,
  webMap,
  mapViewConstructor,
  mapCreator,
  layerCreator,
  search,
  basemaps,
  expand,
  compass,
  measurment,
  legend,
} from "../functions/map";
import loadFeatures from "../functions/loadFeatures";

import MapContext from "../contexts/MapContexts";

const EsriMap = () => {
  // eslint-disable-next-line
  const {
    basemap,
    browserLocation,
    webmap,
    permitVis,
    nopermitVis,
    loadLayer,
    loadPermit,
    loadNopermit,
    setNopermitData,
    setPermitData,
    zoomObject,
    basemapWidget,
    searchWidget,
    compassWidget,
    measurementWidget,
    legendWidget,
  } = useContext(MapContext);

  const [view, setview] = useState();
  const [mapEsri, setMapEsri] = useState();
  const [lyrEsri, setLyrEsri] = useState();
  const [perLayer, setPerLayer] = useState();
  const [noperLayer, setNoperLayer] = useState();

  useEffect(() => {
    if (mapview && !view) {
      setview(mapview);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(
    () => {
      if (mapEsri) {
        mapEsri.basemap = basemap;
        setMapEsri(mapEsri);
      } else if (map) {
        map.basemap = basemap;
        setMapEsri(map);
      }
    }, // eslint-disable-next-line
    [basemap]
  );

  useEffect(() => {
    if (browserLocation) {
      if (view) {
        view.center = browserLocation;
        view.zoom = 15;
      } else if (mapview) {
        mapview.center = browserLocation;
        mapview.zoom = 15;
      }
      const point = new GraphicObj({
        geometry: { type: "point", longitude: browserLocation[0], latitude: browserLocation[1] },
        symbol: { type: "simple-marker", color: [220, 53, 69, 0.89] },
      });

      graphicsLayer.removeAll();
      graphicsLayer.add(point);
      if (mapEsri) {
        mapEsri.add(graphicsLayer);
      } else {
        map.add(graphicsLayer);
      }
    }
    // eslint-disable-next-line
  }, [browserLocation]);

  useEffect(() => {
    if (webmap && webmap !== "null") {
      try {
        const portalMap = new webMap({
          portalItem: {
            id: webmap,
          },
        });

        const mapview = new mapViewConstructor({
          map: portalMap,
          container: "esrimap",
        });

        setMapEsri(portalMap);
        setview(mapview);
      } catch (err) {
        console.log(err);
      }
    } else if (webmap === "null") {
      const originalMap = new mapCreator({ basemap: "gray" });

      const mapview = new mapViewConstructor({
        map: originalMap,
        container: "esrimap",
        center: [38.9968, 34.8021],
        zoom: 6,
      });
      setMapEsri(originalMap);
      setview(mapview);
    }
  }, [webmap]);

  useEffect(() => {
    if (loadLayer && !lyrEsri) {
      const lyr = new layerCreator({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/PoolPermits/MapServer",
      });
      if (mapEsri) {
        mapEsri.removeAll();
        mapEsri.add(lyr);
        setLyrEsri(lyr);
      } else {
        map.removeAll();
        map.add(lyr);
        setMapEsri(map);
        setLyrEsri(lyr);
      }

      lyr.when(() => {
        var allLayersAndSublayers = lyr.allSublayers.flatten((item) => {
          if (item.type === "map-image") {
            item.watch("loaded", function () {
              return item.layers || item.sublayers;
            });
          }
        });

        if (view) {
          view.goTo(lyr.fullExtent);
        } else {
          mapview.goTo(lyr.fullExtent);
        }
        setPerLayer(allLayersAndSublayers.items[0]);
        setNoperLayer(allLayersAndSublayers.items[1]);
      });
    } else {
    }

    // eslint-disable-next-line
  }, [loadLayer]);

  useEffect(() => {
    if (lyrEsri && perLayer && noperLayer) {
      perLayer.visible = permitVis;
      noperLayer.visible = nopermitVis;
    }
    // eslint-disable-next-line
  }, [lyrEsri, permitVis, nopermitVis]);

  useEffect(() => {
    if (loadPermit) {
      loadFeatures(
        "https://sampleserver6.arcgisonline.com/arcgis/rest/services/PoolPermits/FeatureServer/0/query",
        setPermitData
      );
    }
    // eslint-disable-next-line
  }, [loadPermit]);

  useEffect(() => {
    if (loadPermit) {
      loadFeatures(
        "https://sampleserver6.arcgisonline.com/arcgis/rest/services/PoolPermits/FeatureServer/1/query",
        setNopermitData
      );
    }
    // eslint-disable-next-line
  }, [loadNopermit]);

  useEffect(() => {
    if (zoomObject) {
      view.goTo(zoomObject);
    }
    // eslint-disable-next-line
  }, [zoomObject]);

  useEffect(() => {
    if (searchWidget) {
      if (document.querySelector(".esri-search__container")) {
        document.querySelector(".esri-search__container").style.display = "";
      } else {
        const searchbar = new search({ view: view });

        if (view) {
          view.ui.add(searchbar, { position: "top-right", index: 1 });
        } else {
          mapview.ui.add(searchbar, { position: "top-right", index: 1 });
        }
      }
    } else {
      if (document.querySelector(".esri-search__container")) {
        document.querySelector(".esri-search__container").style.display = "none";
      }
    }
    // eslint-disable-next-line
  }, [searchWidget]);

  useEffect(() => {
    if (compassWidget) {
      if (document.querySelector(".esri-compass")) {
        document.querySelector(".esri-compass").style.display = "";
      } else {
        const compassbtn = new compass({ view: view });

        if (view) {
          view.ui.add(compassbtn, { position: "bottom-left", index: 1 });
        } else {
          mapview.ui.add(compassbtn, { position: "bottom-left", index: 1 });
        }
      }
    } else {
      if (document.querySelector(".esri-compass")) {
        document.querySelector(".esri-compass").style.display = "none";
      }
    }
    // eslint-disable-next-line
  }, [compassWidget]);

  useEffect(() => {
    if (legendWidget) {
      if (document.querySelector(".esri-component.esri-legend.esri-widget.esri-widget--panel")) {
        document.querySelector(
          ".esri-component.esri-legend.esri-widget.esri-widget--panel"
        ).style.display = "";
      } else {
        const lgd = new legend({ view: view || mapview });
        console.log(lgd);
        if (view) {
          view.ui.add(lgd, { position: "bottom-right", index: 1 });
        } else {
          mapview.ui.add(lgd, { position: "bottom-right", index: 1 });
        }
        console.log(1);
      }
    } else {
      if (document.querySelector(".esri-component.esri-legend.esri-widget.esri-widget--panel")) {
        document.querySelector(
          ".esri-component.esri-legend.esri-widget.esri-widget--panel"
        ).style.display = "none";
      }
    }
    // eslint-disable-next-line
  }, [legendWidget]);

  useEffect(() => {
    if (basemapWidget) {
      if (document.querySelector(".esri-basemap-gallery__item-container")) {
        document.querySelector(
          ".esri-basemap-gallery__item-container"
        ).parentNode.parentNode.parentNode.parentNode.style.display = "";
      } else {
        if (view) {
          const basebtn = new basemaps({ view: view });
          const expd = new expand({
            view: view,
            content: basebtn,
            expandIconClass: "esri-icon-layer-list expand1",
          });
          expd.autoCollapse = true;
          view.ui.add(expd, { position: "bottom-left", index: 1 });
        } else {
          const basebtn = new basemaps({ view: mapview });

          const expd = new expand({
            view: mapview,
            content: basebtn,
            expandIconClass: "esri-icon-layer-list",
          });
          expd.autoCollapse = true;
          mapview.ui.add(expd, { position: "bottom-left", index: 1 });
        }
      }
    } else {
      if (document.querySelector(".esri-basemap-gallery__item-container")) {
        document.querySelector(
          ".esri-basemap-gallery__item-container"
        ).parentNode.parentNode.parentNode.parentNode.style.display = "none";
      }
    }
    // eslint-disable-next-line
  }, [basemapWidget]);

  useEffect(() => {
    console.log(measurementWidget);
    if (measurementWidget) {
      if (document.querySelector(".esri-measurement")) {
        document.querySelector(".esri-measurement").parentNode.parentNode.parentNode.style.display =
          "";
      } else {
        if (view) {
          const msr = new measurment({ view: view, activeTool: "distance" });
          console.log(msr);
          const expd = new expand({
            view: view,
            content: msr,
            expandIconClass: "esri-icon-layer-list expand1",
          });
          expd.autoCollapse = true;
          view.ui.add(expd, { position: "bottom-left", index: 1 });
        } else {
          const msr = new measurment({ view: mapview, activeTool: "distance" });

          const expd = new expand({
            view: mapview,
            content: msr,
            expandIconClass: "esri-icon-layer-list",
          });
          expd.autoCollapse = true;
          mapview.ui.add(expd, { position: "bottom-left", index: 1 });
        }
      }
    } else {
      if (document.querySelector(".esri-measurement")) {
        document.querySelector(".esri-measurement").parentNode.parentNode.parentNode.style.display =
          "none";
      }
    }
    // eslint-disable-next-line
  }, [measurementWidget]);

  return <></>;
};

export default EsriMap;
