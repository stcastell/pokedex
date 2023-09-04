import styles from './NamesList.module.css';

export default function NamesList(props) {

    const pokemonClickHandler = e => {
        props.onSelectPokemon(e.target.innerHTML);
    }

    return (
        <div className={styles.names}>
            <ul>
                {props.pokeList.map(pokemon => {
                    return (
                        <li key={pokemon.url} onClick={pokemonClickHandler}>{pokemon.name}</li>
                    );
                })}
            </ul>
        </div>

    );
};