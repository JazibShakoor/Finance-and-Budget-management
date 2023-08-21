import React from "react";
import { IoIosPie } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

import "./Saving.scss";

const Saving = () => {
  return (
    <div className="savingWapper">
      <div className="paddingBlock">
        <div className="heading">
          <IoIosPie />
          <h2>Savings</h2>
        </div>
        <BsGraphUpArrow className="graph" />
        <p>$5,839</p>
        <div className="precentageBlock">
          <span>
            <FaArrowTrendDown />
            -11%
            <p>last week</p>
          </span>
          <button>
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Saving;
