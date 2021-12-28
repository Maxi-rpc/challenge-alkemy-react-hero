import { Router } from "express";

const router: Router = Router();

// imp test routes
import testRoute from "./test.route";
// route test
router.use("/test", testRoute);

//imp routes
import heroRoute from "./heroe.route";

router.use("/", heroRoute);

export default router;
