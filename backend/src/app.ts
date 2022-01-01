import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//imp config
import config from "./config/config";

// imp routes
import routesIndex from "./routes/index";

// settings
app.set("port", config.PORT);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", routesIndex);

export default app;
