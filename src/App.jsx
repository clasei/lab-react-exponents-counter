import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App () {

  // count state moved to App to pass it to other child components as props
  // now count state is managed from App and passed to Counter; same working logic
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);



  return (
    <div className="App">
      <h2>Counter</h2>
      
      {/* passing count, decrement, increment as props to counter to update changes */}
      <Counter count={count} onDecrement={decrement} onIncrement={increment}/>

      <br />
      <h2>Exponents</h2>

      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
}

export default App;
