import { useRef } from "react";

function UseRef() {
    const inputRef = useRef(null);

    const focarInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Digite algo" />
            <button onClick={focarInput}>Focar no input</button>
        </div>
    );
}
export default UseRef;
