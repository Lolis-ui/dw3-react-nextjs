import userService from "../services/userService";

//Função para adastrar o usuário
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.Create(email, password);
    res.status(201);
    //Cód 201 : Created
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Erro interno de servidor` });
  }
};

export default {createUser};
