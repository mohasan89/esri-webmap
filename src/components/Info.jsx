import React from "react";
import { ListGroup } from "react-bootstrap";

const Info = () => {
  return (
    <ListGroup.Item className="bg-dark text-white border-white">
      <p>
        this site is build using ArcGIS API for JavaScript, react and bootstrap
        <br />
        build by: <strong>Mohamad Hasan</strong>
        <br />
        email:{" "}
        <a href="mailto: mo-hasan89@hotmail.com" className="text-white">
          mo-hasan89@hotmail.com
        </a>
      </p>
    </ListGroup.Item>
  );
};

export default Info;
