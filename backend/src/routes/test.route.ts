import { Router } from "express";

const route: Router = Router();

// import controller test
import { helloWorld } from "../controllers/test.controller";

route.get("/test", helloWorld);

export default route;
