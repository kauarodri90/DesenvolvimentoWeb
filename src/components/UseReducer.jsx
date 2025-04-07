import { useReducer } from "react";

const initialState = { contador: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 };
        case 'decrementar':
            return { contador: state.contador - 1 };
        default:
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
        </div>
    );
}
export default UseReducer;
