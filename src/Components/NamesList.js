import styles from './NamesList.module.css';
import { useState } from 'react';

export default function NamesList(props) {

    const clickHandler = e => {
        const filteredData = props.data.filter(item => item.name == e.target.innerHTML);
        props.onGetFilteredItem(filteredData[0]);
    }

    return (
        <>
            <ul className={styles.names}>
                {props.data.map(item => {
                    return (
                        <li key={item.url} onClick={clickHandler}>{item.name}</li>
                    );
                })}
            </ul>

        </>
    );
};