const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI || "mongodb://"+ MONGO_USER +":"+ process.env.MONGO_PASS + "@ds239967.mlab.com:39967/heroku_pjhn1xrj", {
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