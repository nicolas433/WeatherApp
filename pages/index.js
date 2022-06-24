import { useState } from "react";
import axios from "axios";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    timeout: 1000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const handleSearchPokemon = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/${searchedPokemon}`);
      setSearchedPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const a = process.env.WEATHER_API_KEY;

  return (
    <div className={styles.container}>
      <div className={styles.appContainer}>
        <div className={styles.landscapeSide}></div>
        <div className={styles.searchSide}>
          <div className={styles.searchComponent}>
            <form>
              {a}
              <input className={styles.searchInput}></input>
              <button className={styles.searchButton}></button>
            </form>
          </div>
          <div className={styles.searchList}></div>
          <hr className={styles.splitLine}></hr>
          <div className={styles.weatherDetails}></div>
        </div>
      </div>
    </div>
  );
}
