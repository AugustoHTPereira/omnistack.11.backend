const express = require("express");

const routes = express.Router();

const OngsController = require("./http/controllers/OngsController");
const IncidentsController = require("./http/controllers/IncidentsController");

routes.post("/auth", OngsController.getOne);

routes.get("/ongs", OngsController.get);
routes.post("/ongs", OngsController.create); 
routes.get("/ongs/:ong_id/incidents", OngsController.getIncidents);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.get);
routes.delete("/incidents/:id", IncidentsController.delete);
routes.get("/incidents/:id", IncidentsController.getOne);

module.exports = routes;