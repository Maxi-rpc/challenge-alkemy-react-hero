import { Router } from "express";

const route: Router = Router();

import {
  getHeroeRandom,
  getHeroeById,
  getHeroeByName,
} from "../controllers/heroe.controller";

route.get("/", getHeroeRandom);
route.get("/:id", getHeroeById);
route.get("/search/:name", getHeroeByName);

export default route;
