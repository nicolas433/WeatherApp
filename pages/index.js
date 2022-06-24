import { useState } from "react";
import axios from "axios";
import { WiCloud } from "react-icons/wi";
import { BiSearch } from "react-icons/bi";

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

  return (
    <div className={styles.container}>
      <div className={styles.appContainer}>
        <div className={styles.landscapeSide}>
          <h1 className={styles.locateTemperature}>16°</h1>
          <div className={styles.locateInfos}>
            <h2 className={styles.locateName}>London</h2>
            <h2 className={styles.locateTime}>06:09 - Monday, 9 Sep '19</h2>
          </div>
          <div className={styles.locateWeater}>
            <WiCloud size={"90"} />
            <h2 className={styles.locateWeatherName}>Rain</h2>
          </div>
        </div>
        <div className={styles.searchSide}>
          <div className={styles.searchComponent}>
            <form>
              <input
                placeholder="Another location"
                className={styles.searchInput}
              ></input>
              <button className={styles.searchButton}>
                <BiSearch size={"30"} />
              </button>
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
