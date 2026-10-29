import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        console.log("Resposta da API:", response.data);

        // Aceita array direto OU { games: [...] } OU { data: [...] }
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.games ?? response.data.data ?? [];

        setGames(data);
      } catch (error) {
        console.log("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className={styles.homeContent}>
      <div className={styles.listGamesCard}>
        <div className={styles.title}>
          <h2>Lista de jogos</h2>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className={styles.games} id={styles.games}>
            {games.length === 0 && <p>Nenhum jogo cadastrado.</p>}

            {games.map((game) => (
              <ul className={styles.listGames} key={game._id ?? game.id ?? game.title}>
                <li className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Capa do jogo" />
                </li>
                <li className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <ul>
                    <li>Plataforma: {game.descriptions?.platform ?? "-"}</li>
                    <li>Gênero: {game.descriptions?.genre ?? "-"}</li>
                    <li>Classificação: {game.descriptions?.rating ?? "-"}</li>
                    <li>Ano: {game.year ?? "-"}</li>
                    <li>
                      Preço:{" "}
                      {typeof game.price === "number"
                        ? game.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : "-"}
                    </li>
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContent;