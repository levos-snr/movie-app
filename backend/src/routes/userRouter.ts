import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/userController";

const router: Router = Router();

router.post("/users", create);
router.get("/users", show);
router.put("/users/:id", update);
router.delete("/users/:id", remove);

export default router;