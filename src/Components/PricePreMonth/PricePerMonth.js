import React from "react";
import { BsStars } from "react-icons/bs";

import "./PricePerMonth.scss";

const PricePerMonth = () => {
  return (
    <div className="pricePerMonthWapper">
      <div className="paddingBlock">
        <BsStars className="start" />
        <h2>$95.9</h2>
        <p>Per Month</p>
        <h4>Choose Best Plan For You!</h4>
      </div>
      <div className="innerDiv">
        <div className="buttonBlock">
          <button>Details</button>
          <button className="blackBtn">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default PricePerMonth;
