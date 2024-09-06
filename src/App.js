import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // Use eval to calculate basic expressions but avoid security issues
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearDisplay = () => {
    setExpression('');
  };

  return (
    <>
    <h1> Simple Calculator

    </h1>
    <div className="calculator">
      <div className="display">{expression || '0'}</div>
      <div className="buttons">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('^')}>^</button>
      </div>
    </div>
    </>
  );
};

export default App;
