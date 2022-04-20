//importando req res
import { Request,Response } from "express";


class UserController{
    public async store(req:Request, res:Response){
    const { name, age, email, password } = req.body;
    if (!name) {
      return res.status(500).json({
        msg: "Digite o nome",
      });
    }
    try {
      const newUser = await user.create({
        //NewUser é só pra pegar o _id
        //Passando o objeto pro banco
        name,
        age,
        email,
        password,
      }); //chamando o banco
      return res.json({ msg: "Usuario criado com sucesso", newUser });
    } catch (e) {
      return res.status(500).json({ msg: `ocorreu um erro  ${e}` });
    }
    }
}


export default UserController