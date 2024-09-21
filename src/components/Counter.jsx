// import { useState } from "react"; // no needed, the state is  managed by parent component == App

const Counter = ({ count, onDecrement, onIncrement }) => {
  

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={onDecrement}>-</button>
      <button className="counter-button" onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
