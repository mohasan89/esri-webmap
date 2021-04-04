import React, { useState, useContext } from "react";
import MapContext from "../contexts/MapContexts";
import { Button, Modal, Table, Pagination } from "react-bootstrap";
import zoomtoObject from "../functions/zoomToObject";
const DataModal = ({ show, handleClose, data }) => {
  const [page, setPage] = useState(0);
  const { setZoomObject } = useContext(MapContext);
  return (
    <Modal show={show} onHide={handleClose} className="p-3 m-3">
      {data && (
        <>
          <Modal.Header className="w-100" closeButton>
            <Modal.Title>Layer data {`{Page: ${page + 1} }`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Table hover striped className="m-2">
                <thead>
                  <tr>
                    {data.fields.map((e) => (
                      <th key={e.alias}>{e.alias}</th>
                    ))}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.slice(page * 8 + 1, (page + 1) * 8).map((e) => (
                    <tr key={e.attributes["objectid"]}>
                      <th>{e.attributes["objectid"]}</th>
                      <th>{e.attributes["apn"]}</th>
                      <th>{e.attributes["address"]}</th>
                      <th>{e.attributes["pool_permit"]}</th>
                      <th>{e.attributes["has_pool"]}</th>
                      <th>
                        <Button
                          onClick={() => {
                            zoomtoObject(e.geometry, data.spatialReference, setZoomObject);
                          }}
                        >
                          <i className="fas fa-search" /> Zoom
                        </Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div>
                <Pagination>
                  <Pagination.First
                    disabled={page === 0}
                    onClick={() => {
                      setPage(0);
                    }}
                  ></Pagination.First>
                  <Pagination.Prev
                    disabled={page === 0}
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  ></Pagination.Prev>

                  {page - 3 >= 0 && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      {1}
                    </Pagination.Item>
                  )}

                  {page - 4 >= 0 && <Pagination.Ellipsis></Pagination.Ellipsis>}
                  {page - 2 >= 0 && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(page - 2);
                      }}
                    >
                      {page - 1}
                    </Pagination.Item>
                  )}
                  {page - 1 >= 0 && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(page - 1);
                      }}
                    >
                      {page}
                    </Pagination.Item>
                  )}

                  <Pagination.Item disabled>{page + 1}</Pagination.Item>
                  {page + 1 <= Math.floor(data.features.length / 8) && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(page + 1);
                      }}
                    >
                      {page + 2}
                    </Pagination.Item>
                  )}

                  {page + 2 <= Math.floor(data.features.length / 8) && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(page + 2);
                      }}
                    >
                      {page + 3}
                    </Pagination.Item>
                  )}

                  {page + 4 <= Math.floor(data.features.length / 8) && (
                    <Pagination.Ellipsis></Pagination.Ellipsis>
                  )}

                  {page + 3 <= Math.floor(data.features.length / 8) && (
                    <Pagination.Item
                      onClick={() => {
                        setPage(Math.floor(data.features.length / 8));
                      }}
                    >
                      {Math.floor(data.features.length / 8) + 1}
                    </Pagination.Item>
                  )}

                  <Pagination.Next
                    disabled={page === Math.floor(data.features.length / 8)}
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  ></Pagination.Next>
                  <Pagination.Last
                    disabled={page === Math.floor(data.features.length / 8)}
                    onClick={() => {
                      setPage(Math.floor(data.features.length / 8));
                    }}
                  ></Pagination.Last>
                </Pagination>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default DataModal;
