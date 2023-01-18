const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

// extra packages

// routes
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//starting the server
const port = process.env.PORT || 3008;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
