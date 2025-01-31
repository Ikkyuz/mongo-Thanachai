const express = require('express');
const app = express.Router();
const controller = require('../controllers/event.controller');

app.get("/", controller.get);
app.get("/:id", controller.getById);
app.post("/", controller.create);

module.exports = app;