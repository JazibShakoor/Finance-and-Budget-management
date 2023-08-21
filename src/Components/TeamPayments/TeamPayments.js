import React from "react";
import { AiFillBell } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";

import "./TeamPayments.scss";

const TeamPayments = () => {
  return (
    <div className="teamPayments">
      <div className="paddingBlock">
        <AiFillBell className="bell" />
        <h2>Team Payments</h2>
        <p>
          <BsFillCalendarDateFill /> 07 Dec approval
        </p>
        <ul>
          <li className="blueCircle"></li>
          <li className="greenCircle"></li>
          <li className="pinkesCircle"></li>
          <li className="whiteCircle">
            <p>25+</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamPayments;
