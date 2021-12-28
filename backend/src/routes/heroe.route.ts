import { Router } from "express";

const route: Router = Router();

import { getHeroeRandom, getHeroe } from "../controllers/heroe.controller";

route.get("/", getHeroeRandom);
route.get("/:id", getHeroe);

export default route;
