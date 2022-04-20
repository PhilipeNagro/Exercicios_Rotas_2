import { Router,Request,Response } from "express";
import InitialController from "../controllers/InitialController";
// import InitialController from "../controllers/InitialController";

const initialController = new InitialController();


//Só as rotas do Initial
const initialRouter =Router();



// rota teste
initialRouter.get("/",initialController.show);

initialRouter.post("/",initialController.send);

initialRouter.get("/",initialController.showUnic);


export default initialRouter;