"use client"
import { useState } from "react";

export default function CalculatePage() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const bcvvalue = 30

  const handleInput1Change = (e) => {
    const value = e.target.value;
    setInput1(value);
    if (value !== "") {
      setInput2((value / bcvvalue).toFixed(2));
    } else {
      setInput2("");
    }
  };

  const handleInput2Change = (e) => {
    const value = e.target.value;
    setInput2(value);
    if (value !== "") {
      setInput1((value * bcvvalue).toFixed(2));
    } else {
      setInput1("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "200px", margin: "0 auto" }}>
      <h1>Calculadora</h1>
      <input
        type="number"
        value={input1}
        onChange={handleInput1Change}
        placeholder="Bs"
      />
      <input
        type="number"
        value={input2}
        onChange={handleInput2Change}
        placeholder="$"
      />
    </div>
  );
}