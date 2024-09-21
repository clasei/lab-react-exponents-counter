import { useState } from "react";
import Exponent from "./components/Exponent";

import "./App.css";
import Counter from "./components/Counter";

// // no needed after refactor and creating Exponent only component

// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";


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

        {/* showing exponents reusing Exponent logic and changing the exponent */}
        {/* power will be calculated considering the count selected by the user and th exponent */}
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} /> 
        <Exponent num={count} exponent={4} /> 
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />

        {/* these components could be deleted from the components folder too:
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} /> */}

      </div>
    </div>
  );
}

export default App;
