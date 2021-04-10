import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pokemon from "./components/Pokemon";
import './App.css';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [nextButton, setNextButton] = useState('');
    const [previousButton, setPreviousButton] = useState('');

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            setPokemons(response.data.results);
            setNextButton(response.data.next);
            setPreviousButton(response.data.previous);
            // console.log(response.data.results);

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData('https://pokeapi.co/api/v2/{endpoint}/');
    },[pokemons]);

  return (
  <>
      <div className="pokemon-container">
     <img id="pokemon-gif" src="https://thumbs.gfycat.com/AjarLastingApisdorsatalaboriosa-small.gif" alt="pokemonbal" />

     <div id="buttons">
         {pokemons && console.log(pokemons)}
          <button
              type="button" id="back-button"
              // disabled={!previousButton}
              onClick={() => fetchData(previousButton)}
          >
              BACK
          </button>

          <button
              type="button" id="next-button"
              // disabled={!nextButton}
              onClick={() => fetchData(nextButton)}
          >
              NEXT
          </button>
     </div>
        <div id="pokemon-cards-container">
              {pokemons && pokemons.map((pokemon) => {
                  // return <p key={pokemon.name}> {pokemon.name}</p>})}
                  // console.log(pokemon);

                return (
                        <Pokemon name={pokemon.name} key={pokemon.name}/>
                )
              })}
        </div>
    </div>
  </>
  );
}

export default App;
