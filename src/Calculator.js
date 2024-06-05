import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Oprezno s korištenjem eval() zbog sigurnosnih razloga
    } catch (error) {
      setResult("Greška");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="text" value={result} readOnly />
      </div>
      <div>
        {"789+456-123*0./".split("").map((char) => (
          <button key={char} onClick={() => handleInput(char)}>
            {char}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
