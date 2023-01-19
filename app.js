const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();

//connect DB
const connectDB = require("./db/connect");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// extra packages

//importing the router
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");

//middleware
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//starting the server
const port = process.env.PORT || 3008;
const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
