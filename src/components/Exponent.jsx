// passing num and exponent from App
const Exponent = ({ num, exponent }) => {

  // initialized in 1 to guarantee proper multiplication (not 0)
  let result = 1 

  for (let i = 0; i < exponent; i++) {
    result *= num
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n^{exponent}</p>
      <p className="exponent-result">{num} ^ {exponent} = <span className="total">{result}</span></p>
    </div>
  );
};

export default Exponent;