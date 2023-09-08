import styles from './Sprite.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Sprite(props) {

    const selectedPokemonData = props.pokeList.filter(pokemon => pokemon.name.toUpperCase() === props.selectedPokemon)[0];

    // const [pkmnData, setPkmnData] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    const [pkmnData, setPkmnData] = useState({
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }
    });


    useEffect(() => {
        async function fetchSelectedPokemon() {
            const response = await fetch(selectedPokemonData.url)
            const jsonResponse = await response.json();
            setPkmnData(await jsonResponse);
        }
        fetchSelectedPokemon();
    }, [props.selectedPokemon, selectedPokemonData]);

    const route = useNavigate();

    const clickHandler = () => { 
        route(`/pokemon/${pkmnData.id}`); 
    }

    return (
        <div className={styles.sprite}>
            <div className={styles.screen}>
                <motion.img src={pkmnData.sprites.front_default} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            </div>
            <button className={styles.details} onClick={clickHandler}>Details</button>
        </div>
    );
}