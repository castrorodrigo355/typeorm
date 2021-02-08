import { Router } from "express";
import * as userCtrl from "../controllers/user";
// import { userMiddleware } from "../middlewares/user";
// import { verifyToken } from "../middlewares/auth";

const router = Router();
router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUserById);
router.post("/", userCtrl.createUser);
router.delete("/:id", userCtrl.deleteUser);
// router.get("/", verifyToken, userCtrl.getUsers);
// router.put("/:id", userCtrl.updateUser);

export default router;