import { loadModules } from "esri-loader";

const zoomtoObject = (object, ref, func) => {
  loadModules(["esri/geometry/Polygon"]).then(([Polygon]) => {
    const poly = new Polygon({
      rings: object.rings,
      spatialReference: ref,
    });
    func(poly.extent);
  });
};

export default zoomtoObject;
