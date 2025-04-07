import React from 'react';
import UseRef from './UseRef';
import UseReducer from './UseReducer';
import UseLayoutEffect from './UseLayoutEffect';

function Hooks() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Exemplos de Hooks</h1>

      <div style={{ marginTop: "40px" }}>
        <h2>useRef</h2>
        <UseRef />
      </div>

      <div style={{ marginTop: "70px" }}>
        <h2>useReducer</h2>
        <UseReducer />
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2>useLayoutEffect</h2>
        <UseLayoutEffect />
      </div>
    </div>
  );
}

export default Hooks;
