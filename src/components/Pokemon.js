import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Pokemon.css';

function Pokemon({name}) {
    // console.log(props)
    const [ pokemonCards, setPokemonCards ] = useState({});
    const [ abilities, setAbilities ] = useState([]);
    const [ moves, setMoves ] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemonCards(response.data);
                setAbilities(response.data.abilities)
                setMoves(response.data.moves[0].move.name.length)
                // console.log(response.data.results);

            } catch (e) {
                console.error(e);
            }
        }
        fetchCards();
    },[name]);


    useEffect( () => {

    },[]);

    return (
        <>
        <div className="pokemonCards">
            {pokemonCards &&
            <>
                <h3>{pokemonCards.name}</h3>
                <img src={pokemonCards.sprites?.front_default} alt="requested pokemon" />
                <p>Moves: {moves}</p>
                <p>Weight: {pokemonCards.weight}</p>
                <p>Abilities: {abilities && abilities.map((ability) => {
                    return console.log(ability.ability.name)
                })}</p>
            </>
            }
        </div>
    </>
    );
}

export default Pokemon;