import React from "react";
import { Link } from "react-router-dom";

import "./DashBoard.scss";
import TeamPayments from "../TeamPayments/TeamPayments";
import Saving from "../Saving/Saving";
import IncomeStatistics from "../IncomeStatistics/IncomeStatistics";
import PricePerMonth from "../PricePreMonth/PricePerMonth";
import Payments from "../Payments/Payments";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <div className="paddingBlock">
        <div className="dashBoardHeading">
          <div className="leftwapper">
            <h1>Analytics</h1>
            <ul className="linkWapper">
              <Link className="active">
                <li>Full Statistics</li>
              </Link>
              <Link>
                <li>Results Summary</li>
              </Link>
            </ul>
          </div>
          <div className="rightWapper">
            <button>+</button>
            <div className="circle"></div>
          </div>
        </div>
        <div className="flexBox">
          <TeamPayments />
          <Saving />
          <IncomeStatistics />
          <PricePerMonth />
        </div>
        <Payments />
      </div>
    </div>
  );
};

export default DashBoard;
