const express = require('express');
const app = express.Router();
const controller = require('../controllers/camera.controller');

app.get("/", controller.get);
app.get("/:id", controller.getById);
app.get("/ip/:ip", controller.getByIp);
app.post("/", controller.create);

module.exports = app;