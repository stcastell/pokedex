import styles from './Modal.module.css'
import { motion } from 'framer-motion';

export default function Modal(props) {
    
    return (
        <div className={styles.backdrop}>
            {props.children}
        </div>
    );
};