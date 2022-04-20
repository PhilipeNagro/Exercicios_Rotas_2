// import initialRouter from "../../modules/initial/routes/initial.routes";
import initialRouter from "@modules/initial/routes/initial.routes";
import { Router } from "express";

const routes = Router();

//Modularizando/Simplificando as rotas  -> initial.routes.ts
routes.use("/initial", initialRouter);

export default routes;