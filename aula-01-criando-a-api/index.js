// Importar o Express
import express from "express";
//importando mongoose
import mongoose from "mongoose";
import Game from "./models/Games.js"
import gameRoutes from "./routes/gameRoutes.js";

// Carregando o Express em uma variavel
const app = express();

// Configurações do Express
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Iniciando a conexao com o mongodb
mongoose.connect("mongodb://127.0.0.1:27017/apithegames_alinhado");

// Carregando as rotas de games
app.use('/', gameRoutes) 

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar API" + error)
    }else{
        console.log("API iniciada com sucesso na porta " + port);
    }
});
