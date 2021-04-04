import { loadModules } from "esri-loader";

const loadFeatures = (link, func) => {
  loadModules(["esri/request"]).then(([EsriRequest]) => {
    var queryOpt = {
      responseType: "json",
      query: {
        f: "json",
        where: "1=1",
        outFields: "*",
        orderByFields: "objectId",
        returnGeometry: true,
      },
    };
    EsriRequest(link, queryOpt).then((res) => {
      func(res.data);
    });
  });
};

export default loadFeatures;
