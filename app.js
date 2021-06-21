/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const corsUtils = require("./utils/cors.js");
const app = express();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(corsUtils.crossOrigin);

const despesa = require('./modules/despesa/controller/despesa-controller.js');
app.use('/finance', despesa)


app.listen(4200, function () {
  console.log("OK");
});
