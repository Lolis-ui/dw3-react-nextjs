import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Listar todos os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Ocorreu um erro ao listar os jogos. Erro interno de servidor`,
    });
  }
};

// Cadastrar um novo jogo
const createGame = async (req, res) => {
  try {
    const { title, year, price, descriptions} = req.body;
    await gameService.Create(title, year, price, descriptions);
    res.status(201).json({ message: "Jogo cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Deletar um jogo
const deleteGame = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      await gameService.Delete(id);
      res.sendStatus(204); // Código 204 (No Content)
    } else {
      res.status(400).json({ error: "Requisição mal formada, ID inválido" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno de servidor." });
  }
};

// Atualizar um jogo
const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, price, descriptions } = req.body;
      const game = await gameService.Update(id, title, year, price, descriptions);
      res.status(200).json({ game }); // Código 200 (OK)
    } else {
      res.sendStatus(400); // Código 400 (Bad Request)
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

// Listar um único jogo
const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);
      if (!game) {
        res.sendStatus(404); // Jogo não encontrado
      } else {
        res.status(200).json({ game });
      }
    } else {
      res.sendStatus(400); // Requisição inválida - Bad request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

// Exportando funções
export default { getAllGames, createGame, deleteGame, updateGame, getOneGame };
