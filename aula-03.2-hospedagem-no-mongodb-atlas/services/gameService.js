// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Serviço/MÉTODO para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    // MÉTODO PARA CADASTRAR JOGOS
    async Create(title, year, price, descriptions) {
        try {
            const newGame = new Game({
                // title : title, (Não precisa repetir duas vezes)
                title,
                year,
                price,
                descriptions
            })
            // Aguardar a operação de cadastro
            // .save() é o método do mongoose para cadastrar
            await newGame.save();
        } catch (error) {
            console.log(error)
        }
    }

    // Método para Exluir de Jogo
    async Delete(id) {
        try {
            await Game.findByIdAndDelete(id);
            console.log(`O jogo com a id ${id} foi deletado`)
        } catch (error) {
            console.log(error)
        }
    }

    // Método para alterar um jogo
    async Update(id, title, year, price, descriptions) {
        try {
            await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions
            })
            console.log(`O jogo com a Id ${id} foi alterado.`)
        } catch (error) {
            console.log(error)
        }
    }

    // Método para listar um registro único
    async getOne(id) {
        try {
            const game = await Game.findOne({_id : id})
            // findOne: método do Mongoose para selecionar um registro único
            return game
        }catch (error){
            console.log(error)
        }

    }
// Encerr a Classe
}
// Exportando a classe
export default new gameService()

