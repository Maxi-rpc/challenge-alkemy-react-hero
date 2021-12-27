import express, { Application } from "express";

const app: Application = express();

// imp routes
import routesIndex from "./routes/index";

// settings
app.set("port", 4000);

// middlewares
app.use(express.json());

// routes
app.use("/api", routesIndex);

export default app;
