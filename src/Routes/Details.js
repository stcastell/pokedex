import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Details.module.css'
import Modal from '../UI/Modal';
import { useNavigate, useLoaderData } from 'react-router-dom';

export default function Details() {

  const route = useNavigate();
  const data = useLoaderData();

  const clickHandler = () => {
    route('/');
  }

  const [species, setSpecies] = useState({});

  useEffect(() => { 
    async function getPokemonSpecies() {
      const response = await fetch(data.species.url);
      const jsonResponse = await response.json();
      setSpecies(await {
        category: jsonResponse.genera[7].genus.toUpperCase(),
        description: jsonResponse.flavor_text_entries[0].flavor_text
      });
    }

    getPokemonSpecies();

  },[data.species.url])

  return (
    <Modal>
      <motion.div className={styles.container} initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} exit={{opacity:0, y:5, transition:{duration:3}}}>

        <div className={styles.pkmn_data}>
          <div className={styles.image}>
            <img alt={`${data.name} sprite.`} src={data.sprites.front_default} />
            <p>N°. {data.id}</p>
          </div>

          <div className={styles.data}>
            <h1>{data.name.toUpperCase()}</h1>
            <h2>{species.category}</h2>
            <div className={styles.physical_details}>
              <p>HE</p>
              <p>{`${data.height}m`}</p>
              <p>WE</p>
              <p>{`${data.weight}kg`}</p> 
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <p>{species.description}</p>
        </div>

        <button className={styles.button} onClick={clickHandler}>BACK</button>
      </motion.div>
    </Modal>
  );
}