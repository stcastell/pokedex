import App from '../App';
import styles from './Main.module.css';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function Main() { 

    return (
        <>
            <div className={styles.container}>
                <App />
                <AnimatePresence>
                    <Outlet/>
                </AnimatePresence>
                
            </div>
        </>
    );
};


export async function loader({params}) { 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const jsonResponse = await response.json();
    return (jsonResponse);
};