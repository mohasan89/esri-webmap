import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "react-bootstrap";
import Map from "./components/EsriMap";
import MapContext from "./contexts/MapContexts";

function App() {
  const { basemap } = useContext(MapContext);
  return (
    <Row className="bg-dark p-0 m-0 p-0">
      <Col md={5} className="m-0 p-3">
        <Sidebar />
      </Col>
      <Col md={7} className="m-0 p-0">
        <div style={{ height: "100vh" }} id="esrimap">
          <Map basemap={basemap} />
        </div>
      </Col>
    </Row>
  );
}

export default App;
