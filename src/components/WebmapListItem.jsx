import React, { useContext, useState } from "react";
import { ListGroup, Button, Form, Row, Col } from "react-bootstrap";
import MapContext from "../contexts/MapContexts";

const WebmapListItem = () => {
  const { setWebmap } = useContext(MapContext);
  const [map, setMap] = useState("e691172598f04ea8881cd2a4adaa45ba");

  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      <Form.Group>
        <Form.Label>
          Portal map <em>(this will load the web map by its id)</em>
        </Form.Label>
        <Form.Control as="select" onChange={(e) => setMap(e.target.value)} value={map}>
          <option value="e691172598f04ea8881cd2a4adaa45ba">Accidental deaths</option>
          <option value="7ee3c8a93f254753a83ac0195757f137">Injury counts</option>
          <option value="41281c51f9de45edaf1c8ed44bb10e30">Parks and trails map</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Or enter the id for the map:</Form.Label>
        <Form.Control
          type="text"
          value={map}
          onChange={(e) => setMap(e.target.value)}
          placeholder="enter id of the map"
        />
        <Row className="p-0 m-auto">
          <Col md={6} className="p-0">
            <Button variant="light" className="my-3 mx-0" onClick={() => setWebmap(map)}>
              Load map
            </Button>
          </Col>
          <Col md={6} className="p-0">
            <Button variant="danger" className="my-3 mx-0" onClick={() => setWebmap("null")}>
              Remove map
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </ListGroup.Item>
  );
};

export default WebmapListItem;
