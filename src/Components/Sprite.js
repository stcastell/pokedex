import styles from './Sprite.module.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Sprite(props) {

    const selectedPokemonData = props.pokeList.filter(pokemon => pokemon.name === props.selectedPokemon)[0];
    const [name, setName] = useState('');


    useEffect(() => {
        async function fetchSelectedPokemon() {
            const response = await fetch(selectedPokemonData.url)
            const jsonResponse = await response.json();
            setName(jsonResponse.sprites.front_default);
        }
        fetchSelectedPokemon();
    }, [props.selectedPokemon])

    const clickHandler = () => { 
        alert(name)
    }

    return (
        <div className={styles.sprite}>
            <div className={styles.screen}>
                <motion.img src={name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            </div>
            <button className={styles.details} onClick={clickHandler}>Details</button>
        </div>
    );
}