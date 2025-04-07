import { useState, useRef, useLayoutEffect } from "react";

function UseLayoutEffect() {
    const [largura, setLargura] = useState(0);
    const divRef = useRef(null);

    useLayoutEffect(() => {
        if (divRef.current) {
            setLargura(divRef.current.getBoundingClientRect().width);
        }
    }, []);

    return (
        <div>
            <div ref={divRef} style={{ width: "200px", backgroundColor: "lightblue", padding: "10px" }}>
                Esta div tem largura de {largura}px
            </div>
        </div>
    );
}
export default UseLayoutEffect;
