import { Router } from "express";
import UserController, * as userCtrl from "../controllers/user";
// import { userMiddleware } from "../middlewares/user";
// import { verifyToken } from "../middlewares/auth";

const router: Router = Router();
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.delete("/:id", UserController.deleteUser);
// router.get("/", verifyToken, userCtrl.getUsers);
// router.put("/:id", userCtrl.updateUser);

export default router;