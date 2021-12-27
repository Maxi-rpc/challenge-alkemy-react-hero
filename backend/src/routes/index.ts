import { Router } from "express";

const router: Router = Router();

import testRoute from "./test.route";
//router.use("/api",ruta);

// route test
router.use("/test", testRoute);

export default router;
