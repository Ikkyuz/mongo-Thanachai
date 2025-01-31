const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");
const cameraRoute = require("./routes/camera.route");
const eventRoute = require("./routes/event.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
  res.send("Sawasdee");
});

app.use("/cameras", cameraRoute);
app.use("/events", eventRoute)

app.listen(port, () => {
  console.log("App started at port: " + port);
});
