import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Clicou {count} vezes
      </button>
      {count % 3 === 0 && <p>Número múltiplo de 3!</p>}
    </div>
  );
}

export default Contador;