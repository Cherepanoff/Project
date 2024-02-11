import React, {useState} from 'react';
import styles from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <button className={styles.btn} onClick={increment}>{count}</button>
        </div>
    );
};

