import React from 'react';

const index = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Adicionar {counter}
      </button>
      {counter}
    </div>
  );
};

export default index;
