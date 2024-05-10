import { Router } from "express";
import UserRouter from "./userRouter";

const router: Router = Router();

router.use("/api/", UserRouter);

export default router;