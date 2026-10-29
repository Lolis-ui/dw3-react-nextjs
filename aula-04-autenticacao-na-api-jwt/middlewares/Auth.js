//Middleware de Autentificação
import jwt from "jsonwebtoken";
import userController from "../controllers/userController";

//Função que irá verificar se o usuário possui um token válido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    //Se o token não for vazio
    const bearer = authToken.split(" ");
    const token = bearer[1];
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      //Se o token for inválido
      if (error) {
        res.status(401).json({ error: "Token inválido" });
        //Cod.401 (UNAUTHORIZED)
        res.status(401).json({ error: "Token Inválido" });
      } else {
        req.token = token;
        req.loggeduser = {
          id: data.id,
          email: data.email,
        };
        //Permite prosseguir com a requisição
        next();
      }
    });
    //Se o token estiver vazio
  }else{
    res.status(401).json({error: "Token não Informado"})
  }
};
