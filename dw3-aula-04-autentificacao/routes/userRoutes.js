import express from "express";

const userRoutes = express.Router();
import userController from "../controllers/userController";

//Endpoint para cadastrar um usuário
userRpoutes.post("/user", userController.createUser);

export default userRoutes;
