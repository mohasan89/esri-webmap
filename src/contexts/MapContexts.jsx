import React, { createContext, useState } from "react";

const MapContext = createContext();

export const MapContextProvider = (props) => {
  const [basemap, setBasemap] = useState("gray");
  const [browserLocation, setBrowserLocation] = useState(null);
  const [browserLocationError, setbrowserLocationError] = useState(null);
  const [webmap, setWebmap] = useState(null);
  const [permitVis, setPermitVis] = useState(false);
  const [nopermitVis, setNopermitVis] = useState(false);
  const [loadLayer, setLoadLayer] = useState(false);
  const [loadPermit, setLoadPermit] = useState(false);
  const [permitData, setPermitData] = useState(false);
  const [loadNopermit, setLoadNopermit] = useState(false);
  const [nopermitData, setNopermitData] = useState(false);
  const [zoomObject, setZoomObject] = useState(null);
  const [searchWidget, setSearchWidget] = useState(false);
  const [basemapWidget, setBasemapWidget] = useState(false);
  const [compassWidget, setCompassWidget] = useState(false);
  const [measurementWidget, setMeasurementWidget] = useState(false);
  const [legendWidget, setLegendWidget] = useState(false);

  return (
    <MapContext.Provider
      value={{
        basemap,
        setBasemap,
        browserLocation,
        setBrowserLocation,
        browserLocationError,
        setbrowserLocationError,
        webmap,
        setWebmap,
        permitVis,
        setPermitVis,
        nopermitVis,
        setNopermitVis,
        loadLayer,
        setLoadLayer,
        loadPermit,
        setLoadPermit,
        permitData,
        setPermitData,
        loadNopermit,
        setLoadNopermit,
        nopermitData,
        setNopermitData,
        zoomObject,
        setZoomObject,
        searchWidget,
        setSearchWidget,
        basemapWidget,
        setBasemapWidget,
        compassWidget,
        setCompassWidget,
        measurementWidget,
        setMeasurementWidget,
        legendWidget,
        setLegendWidget,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContext;
