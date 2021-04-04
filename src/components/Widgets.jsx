import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import MapContext from "../contexts/MapContexts";

const WidgetsList = () => {
  const {
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
  } = useContext(MapContext);

  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      <p>Toggle toolbars on map:</p>
      <div className="text-center icons w-100">
        <Button
          title={!searchWidget ? "enable search toolbar" : "disable search toolbar"}
          variant={!searchWidget ? "light" : "danger"}
          className="mx-2 my-1 p-2"
          onClick={() => {
            setSearchWidget(!searchWidget);
          }}
        >
          <i className="fas fa-search" />
        </Button>
        <Button
          title={!basemapWidget ? "enable basemap toolbar" : "disable search toolbar"}
          variant={!basemapWidget ? "light" : "danger"}
          className="mx-2 my-1 p-2"
          onClick={() => {
            setBasemapWidget(!basemapWidget);
          }}
        >
          <i className="fas fa-map" />
        </Button>

        <Button
          title={!compassWidget ? "enable compass toolbar" : "disable compass toolbar"}
          variant={!compassWidget ? "light" : "danger"}
          className="mx-2 my-1 p-2"
          onClick={() => {
            setCompassWidget(!compassWidget);
          }}
        >
          <i className="fas fa-compass" />
        </Button>

        <Button
          title={!legendWidget ? "enable legend toolbar" : "disable legend toolbar"}
          variant={!legendWidget ? "light" : "danger"}
          className="mx-2 my-1 p-2"
          onClick={() => {
            setLegendWidget(!legendWidget);
          }}
        >
          <i className="fas fa-layer-group" />
        </Button>

        <Button
          title={!measurementWidget ? "enable attribute toolbar" : "disable attribute toolbar"}
          variant={!measurementWidget ? "light" : "danger"}
          className="mx-2 my-1 p-2"
          onClick={() => {
            setMeasurementWidget(!measurementWidget);
          }}
        >
          <i className="fas fa-ruler" />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default WidgetsList;
