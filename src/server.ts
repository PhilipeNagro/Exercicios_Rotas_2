
// {Request,Response} == importando o tipo
import express,{Request,Response} from "express";

//importando todas as rotas
import routes from "@shared/routes";


//criar instancia express
const app = express();

//poder trabalhar com json
app.use(express.json());

//Utilizando as rotas
app.use(routes);

app.listen(3000,()=>{
    console.log("Running :3 ");
})

