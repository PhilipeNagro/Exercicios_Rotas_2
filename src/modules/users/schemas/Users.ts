// importando banco
import mongoose from "@shared/database";

import {Schema} from "mongoose"


// Criando schema do banco
const user = new Schema(
    {   
        name: {type:String, required:true},
        age:Number,
        email:{type:String,required:true},
        password:{type:String,required:true}
    }
)

//Efetivando a tabela no banco ("Nome da tabela no banco", formato da tabela)
export default mongoose.model("User",user);