import React from "react";

import "./IncomeStatisticus.scss";

const IncomeStatistics = () => {
  return (
    <div className="incomeStatisticsWapper">
      <div className="paddingBlock">
        <h2>Income Statistics</h2>
        <div className="oval">
          <p>+8%</p>
        </div>
        <div className="graphBlock">
          <ul className="y-axis">
            <div className="dashLine"></div>
            <li>$2m</li>
            <li>$1m</li>
            <li>$0m</li>
          </ul>
          <ul className="barBlock">
            <li className="bar">
              <div className="graphPercentage">15%</div>
            </li>
            <li className="bar2">
              <div className="graphPercentage">21%</div>
            </li>
            <li className="bar3">
              <div className="graphPercentage">32%</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IncomeStatistics;
