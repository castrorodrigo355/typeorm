import { Router } from "express";
import * as taskCtrl from "../controllers/task";
// import { userMiddleware } from "../middlewares/user";
// import { verifyToken } from "../middlewares/auth";

const router = Router();
// router.get("/", taskCtrl.ge);
// router.get("/:id", taskCtrl.getUserById);
router.post("/", taskCtrl.createTask);
// router.delete("/:id", taskCtrl.deleteUser);
// router.get("/", verifyToken, taskCtrl.ge);
// router.put("/:id", taskCtrl.updateUser);

export default router;