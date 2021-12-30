import { Router } from "express";

const router: Router = Router();

// imp test routes
import testRoute from "./test.route";
// route test
router.use("/test", testRoute);

//imp routes
import heroRoute from "./heroe.route";
import authRoute from "./auth.route";

router.use("/", heroRoute);
router.use("/auth", authRoute);

export default router;
