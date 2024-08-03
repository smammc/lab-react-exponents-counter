const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{`${count}⁵`}</p>
    <p className="exponent-result">
      2 * 2 * 2 * 2 * 2 = <span className="total">32</span>
    </p>
  </div>
);

export default ExponentFive;
