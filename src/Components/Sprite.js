import styles from './Sprite.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Sprite(props) {

    const selectedPokemonData = props.pokeList.filter(pokemon => pokemon.name.toUpperCase() === props.selectedPokemon)[0];
    const [pkmnUrl, setPkmnUrl] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');


    useEffect(() => {
        async function fetchSelectedPokemon() {
            const response = await fetch(selectedPokemonData.url)
            const jsonResponse = await response.json();
            setPkmnUrl(await jsonResponse.sprites.front_default);
        }
        fetchSelectedPokemon();
    }, [props.selectedPokemon])

    const route = useNavigate();

    const clickHandler = () => { 
        route('/pokemon'); 
    }

    return (
        <div className={styles.sprite}>
            <div className={styles.screen}>
                <motion.img src={pkmnUrl} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            </div>
            <button className={styles.details} onClick={clickHandler}>Details</button>
        </div>
    );
}