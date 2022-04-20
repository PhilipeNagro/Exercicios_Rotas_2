//importando router dentro do express
import {Router} from "express";
import UserController from "../controllers/UserController";




const userRouter = Router();
//instanciando controller
const userController = new UserController();


userRouter.post("/", userController.store);



  export default userRouter;