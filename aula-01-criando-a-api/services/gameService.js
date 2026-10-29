import Game from "../models/Games.js";

class gameService {
  // Listar todos os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Criar um novo jogo
  async Create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions
      });
      await newGame.save();
      console.log(`Game ${title} foi cadastrado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Deletar um jogo
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi deletado.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Atualizar um jogo
  async Update(id, title, year, price, descriptions) {
    try {
      const updatedGame = await Game.findByIdAndUpdate(
        id,
        {
          title,
          year,
          price,
          descriptions
        },
        { new: true }
      );
      console.log(`Dados do game com id: ${id} alterados com sucesso.`);
      return updatedGame;
    } catch (error) {
      console.log(error);
    }
  }

  // Buscar um único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();