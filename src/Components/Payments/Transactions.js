import React from "react";
import { CiSearch } from "react-icons/ci";

import "./Transactions.scss";
import { list } from "../DemoData/DemoData";

const Transactions = () => {
  return (
    <div className="transactionsWapper">
      <div className="transactionHeading">
        <h2>Transactions</h2>
        <CiSearch />
        <input type="search" name="" id="" placeholder="Search" />
      </div>
      <ul className="transactionRecord">
        <li>Reciever</li>
        <li>Type</li>
        <li>Status</li>
        <li>Data</li>
        <li>Amount</li>
      </ul>
      <div className="scrollBar">
        {list.map((list, index) => (
          <ul className="transactionRecordList" key={index}>
            <li>
              <input type="checkbox" name="" id="" />
            </li>
            <li>
              <div className="transferName">
                <div className="square"></div>
                <p>{list.name}</p>
              </div>
            </li>
            <li>{list.type}</li>
            <li>
              <div className={list.class}>{list.status}</div>
            </li>
            <li>{list.date}</li>
            <li>{list.price}</li>
            <li className="border">
              <button>Details</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
