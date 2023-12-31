require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// convert request to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

const routes = require("./routes");
app.use(routes);

// SWAGGER
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("./json/apidocs.json");
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(apiDocumentation, { explorer: true })
);
// END SWAGGER

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
