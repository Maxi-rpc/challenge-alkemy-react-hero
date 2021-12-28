import { Router } from "express";

const route: Router = Router();

import { getHeroe } from "../controllers/heroe.controller";

route.get("/", getHeroe);

export default route;
