import App from '../App';
import styles from './Main.module.css';
import { Outlet } from 'react-router-dom';

export default function Main() { 
    return (
        <>
            <div className={styles.container}>
                <App />
                <Outlet/>
            </div>
        </>
    );
};

// export async function getPkmnSpecies() { 
//     const response = await fetch()
// };