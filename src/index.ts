// Required External Modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { exchangeRouter } from "./Exchange/Exchange.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

var config = require('./config');
dotenv.config();

// App Variables
if (!process.env.PORT) {
  process.exit(1);
}

const PORT = 3500;
const app = express();

//  App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/exchanges/", exchangeRouter);
app.use(errorHandler);
app.use(notFoundHandler);

// Server Activation
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});