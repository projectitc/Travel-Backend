const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");

//route import
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
const SubCategoryRoute = require("./routes/subCategoryRoute");
const pricesRoute = require("./routes/pricesRoute");
const externalRoute = require("./routes/externalRoute");
const itemRoute = require("./routes/itemRoute");
const cityRoute = require("./routes/cityRoute");

//options
const app = express();
const port = 3001;

//middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

//connect mongoDB
mongoose
  .connect(process.env.DATABASE_ONLINE)
  .then(() => app.listen(port))
  .catch((err) => console.log(err));

//home
app.get("/", (req, res) => {
  res.json({ work: true });
});

app.use("/auth", authRoute);
app.use(externalRoute); //for upload media
app.use("/item", itemRoute);
app.use("/city", cityRoute);
