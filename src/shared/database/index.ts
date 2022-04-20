import mongoose from "mongoose";

//conectar ao banco  //("chave do banco")
mongoose.connect("mongodb+srv://admin:admin@cluster0.cnisw.mongodb.net/ph?retryWrites=true&w=majority");

//exportar o banco
export default mongoose;