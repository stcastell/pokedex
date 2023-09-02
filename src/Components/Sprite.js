import styles from './Sprite.module.css';
import { useEffect, useState } from 'react';

export default function Sprite(props) {

    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        async function fetchSpriteURL(url) {
            const fetchResponse = await fetch(url);
            const response = await fetchResponse.json().then();
            return (response.sprites.front_default);
        }
        setPokemonData(fetchSpriteURL(props.data.url));
        
        console.log(pokemonData);
    }, []);

    return (
        <>
            {props.data.name}
        </>
    );
}