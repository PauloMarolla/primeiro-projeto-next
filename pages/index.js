import React from 'react';
import styles from './index.module.css';

const index = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Hello World</h1>
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        Adicionar {counter}
      </button>
      <h1>Quantidade {counter}</h1>
    </div>
  );
};

export default index;
