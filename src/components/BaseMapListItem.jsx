import React, { useContext } from "react";
import { ListGroup, Form } from "react-bootstrap";
import MapContext from "../contexts/MapContexts";

const BaseMapListItem = () => {
  const { setBasemap } = useContext(MapContext);

  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      <Form.Group>
        <Form.Label>Base map</Form.Label>
        <Form.Control as="select" onChange={(e) => setBasemap(e.target.value)}>
          <option value="gray">Gray</option>
          <option value="dark-gray">Dark Gray</option>
          <option value="osm">OpenStreetMap</option>
          <option value="terrain">Terrain</option>
          <option value="topo">Topography</option>
          <option value="satellite">Satellite</option>
        </Form.Control>
      </Form.Group>
    </ListGroup.Item>
  );
};

export default BaseMapListItem;
