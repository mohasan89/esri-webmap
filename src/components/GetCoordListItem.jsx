import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import MapContext from "../contexts/MapContexts";

const Sidebar = () => {
  const { setBrowserLocation, browserLocationError, setbrowserLocationError } = useContext(
    MapContext
  );
  const geolocateBrowser = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const x = position.coords.longitude;
        const y = position.coords.latitude;
        setBrowserLocation([x, y]);
      },
      (error) => {
        setbrowserLocationError("allow browser geolocation");
      }
    );
  };

  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      {browserLocationError && (
        <div className="bg-danger border-danager p-1 rounded my-2">{browserLocationError}</div>
      )}
      <p>Get your Coordinates:</p>
      <Button variant="light" onClick={geolocateBrowser}>
        Bowser coordinates
      </Button>
    </ListGroup.Item>
  );
};

export default Sidebar;
