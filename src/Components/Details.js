import styles from './Details.module.css'
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router-dom';

export default function Details() {

  const route = useNavigate();

  const clickHandler = () => {
    route('/');
  }

  return (
    <Modal>
      <h1 className={styles.details}>Hellooo</h1>
      <button onClick={clickHandler}>BACK</button>
    </Modal>
  );
}