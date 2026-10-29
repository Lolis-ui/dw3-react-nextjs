//Serviço de Autentificação 
import axios from "axios";
//função que coleta o token do localStorage do navegador
export const getAxiosConfig = () => ({
    headers: {
        Authorization: `Bearer ${
            typeof window !== "undefined" ? (localStorage.getItem("token")?? "") : ""
        }`,
    },
});

//Função que realiza login
export const login = async (email, password) => {
    try{
        const response = await axios.post("http://localhost:4000/auth", { email, password });
        //Armazenando o token
        const token = response.data.token;
        localStorage.setItem("token", token);
        return {success: true};
    } catch (error) {
        return{success: false, message: error.response.data.message}
    }
};

//Função que realiza logout
export const logout = () => {
    localStorage.removeItem("token");
};