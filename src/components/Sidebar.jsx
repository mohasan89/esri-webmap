import React from "react";
import { Navbar, ListGroup } from "react-bootstrap";

import BaseMapListItem from "./BaseMapListItem";
import GetCoordListItem from "./GetCoordListItem";
import WebmapListItem from "./WebmapListItem";
import LayerListItem from "./LayerListItem";
import WidgetsList from "./Widgets";
import Info from "./Info";

const Sidebar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="m-0 pl-4 flex-column overflow-auto "
      style={{ maxHeight: "92vh" }}
    >
      <div className="w-100">
        <div className="d-flex mb-3 justify-space justify-content-between w-100 ">
          <Navbar.Brand href="/" className="d-block">
            ESRI JS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="d-block responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav bg-dark w-100">
          <ListGroup className=" d-block w-100 ">
            <BaseMapListItem />
            <GetCoordListItem />
            <WebmapListItem />
            <LayerListItem />
            <WidgetsList />
            <Info />
          </ListGroup>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Sidebar;
