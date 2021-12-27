import { Router } from "express";

const route: Router = Router();

// import route test
import { helloWorld } from "../controllers/test.controller";

route.get("/test", helloWorld);

export default route;
