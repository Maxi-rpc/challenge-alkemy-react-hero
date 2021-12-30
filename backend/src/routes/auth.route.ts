import { Router } from "express";

const route: Router = Router();

import { login } from "../controllers/auth.controller";

route.post("/", login);

export default route;
