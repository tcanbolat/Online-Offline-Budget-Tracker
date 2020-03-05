const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI || "mongodb://"+ process.env.MONGO_USER +":"+ process.env.MONGO_PASS + "@ds121189.mlab.com:21189/heroku_n0n5lwq6", {
  useMongoClient: true
});

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

app.use(require("./controller/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});