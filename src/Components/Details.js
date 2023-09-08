import styles from './Details.module.css'
import Modal from '../UI/Modal';
import { useNavigate, useLoaderData } from 'react-router-dom';

export default function Details() {

  const route = useNavigate();
  const data = useLoaderData();

  const clickHandler = () => {
    route('/');
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.image}>
            <img src={data.sprites.front_default} />
            <p>N°. {data.id}</p>
          </div>
          <div>
            <h1>{data.name.toUpperCase()}</h1>
            <h2></h2>
          </div>
        </div>
        <div className={styles.description}>

        </div>
        <button className={styles.button} onClick={clickHandler}>BACK</button>
      </div>
    </Modal>
  );
}