import React, { useRef } from "react";
import "./style/app.css";

const App = () => {
    const input = useRef();
    const titre = useRef();

    const clicked = () => {
        // input.current.value = 'Bonjour';
        titre.current.innerText = input.current.value;
    };

    return (
        <div>
            <h1 ref={titre}></h1>
            <input type="text" name="" id="" ref={input} />
            <button onClick={clicked}>Clicked</button>
        </div>
    );
};

export default App;
