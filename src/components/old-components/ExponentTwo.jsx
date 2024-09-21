const ExponentTwo = ({ count }) => ( // count passed from App

   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    {/* hard-code udpated to show results according to Counter user selection */}
    <p className="exponent-result"> { count } * { count } = <span className="total"> { count ** 2 } </span></p>
  </div>
);

export default ExponentTwo;