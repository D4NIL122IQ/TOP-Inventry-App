const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoutes.js");
require("dotenv").config();

app.use("/", indexRouter);

app.listen(process.env.PORT || 4300);
