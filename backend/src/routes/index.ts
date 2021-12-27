import { Router } from "express";

const router: Router = Router();

// imp test routes
import testRoute from "./test.route";
// route test
router.use("/test", testRoute);

//router.use("/api",ruta);

export default router;
