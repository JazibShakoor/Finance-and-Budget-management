import React from "react";
import { BsThreeDots } from "react-icons/bs";

import data from "../DemoData/DemoData";
import "./Payments.scss";
import Transactions from "./Transactions";

const Payments = () => {
  return (
    <div className="paymentsWapper">
      <h2>Recent Payments</h2>
      <div className="recentPaymentsBlock">
        {data.map((data, index) => (
          <div className="payments1" key={index}>
            <div className="square"></div>
            <div className="details">
              <p>{data.name}</p>
              <p>Mar 9 2023</p>
            </div>
            <div className="price">{data.price}</div>
            <div className={`status${data.class}`}>
              <p>{data.status}</p>
            </div>
            <BsThreeDots />
          </div>
        ))}
      </div>
      <Transactions />
    </div>
  );
};

export default Payments;
