import { Router } from "express";
import { AuthenticateController } from "../modules/accounts/useCases/authenticateUser/AuthenticateController";

const authRoutes = Router();
const controller = new AuthenticateController()
authRoutes.post("/sessions", controller.handle )

export { authRoutes }