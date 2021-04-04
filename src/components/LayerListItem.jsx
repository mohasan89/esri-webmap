import React, { useContext, useState } from "react";
import { ListGroup, Button, Form, Row, Col } from "react-bootstrap";
import MapContext from "../contexts/MapContexts";
import DataModal from "./DataModal";

const LayerListItem = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const {
    nopermitVis,
    setNopermitVis,
    permitVis,
    setPermitVis,
    setLoadLayer,
    setLoadPermit,
    setLoadNopermit,
    nopermitData,
    permitData,
  } = useContext(MapContext);

  const [activeLayer, setActiveLayer] = useState(false);
  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      <Form.Group>
        <Form.Label>
          This part will download layer form ArcGIS REST Services{" "}
          <em>
            the example is done for pool permit/no permit{" "}
            <a
              href="https://sampleserver6.arcgisonline.com/arcgis/rest/services/PoolPermits/FeatureServer"
              target="_blank"
              rel="noreferrer"
            >
              see sourse
            </a>
          </em>
        </Form.Label>
      </Form.Group>

      <Row className="p-0 m-auto">
        <Col className="p-0">
          <Button
            variant="light"
            onClick={() => {
              setLoadLayer(true);
              setActiveLayer(true);
              setPermitVis(true);
              setNopermitVis(true);
            }}
          >
            Load Layer{" "}
          </Button>
        </Col>
        <Col className="p-0">
          <Button
            variant="danger"
            onClick={() => {
              setLoadLayer(false);
              setActiveLayer(false);
              setPermitVis(false);
              setNopermitVis(false);
            }}
          >
            Reomve Layer{" "}
          </Button>
        </Col>
      </Row>
      <Form className="my-3">
        <Form.Group className="d-flex justify-content-between">
          <Form.Check
            type="checkbox"
            label="Permit"
            disabled={!activeLayer}
            checked={permitVis}
            onChange={(e) => setPermitVis(!permitVis)}
          />
          <Button
            disabled={!activeLayer}
            className="py-0"
            variant="info"
            onClick={() => {
              setLoadPermit(true);
              handleShow1();
            }}
          >
            show data
          </Button>
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Check
            type="checkbox"
            label="No Permit"
            disabled={!activeLayer}
            checked={nopermitVis}
            onChange={(e) => setNopermitVis(!nopermitVis)}
          />
          <Button
            disabled={!activeLayer}
            className="py-0"
            variant="info"
            onClick={() => {
              setLoadNopermit(true);
              handleShow2();
            }}
          >
            show data
          </Button>
        </Form.Group>
      </Form>
      {permitData && <DataModal show={show1} data={permitData} handleClose={handleClose1} />}
      {nopermitData && <DataModal show={show2} data={nopermitData} handleClose={handleClose2} />}
    </ListGroup.Item>
  );
};

export default LayerListItem;
