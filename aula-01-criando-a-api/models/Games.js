//Model de Games 
import mongoose, { Schema } from "mongoose";

//Schema para documento aninhado (descriptions)
const descriptionsSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
})

//Criando o schema de games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionsSchema
});

//Criando uma coleção 
const Game = mongoose.model('Game', gameSchema);
export default Game;