import styles from './Search.module.css'
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router-dom';

export default function Search() { 

    const route = useNavigate();

    const back = () => { 
        route('/');
    }

    return (
        <Modal>
            <p>Comming Soon</p>
            <button onClick={back}>Go back</button>
        </Modal>
    );
}