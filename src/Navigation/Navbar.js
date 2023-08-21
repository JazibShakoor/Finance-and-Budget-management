import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { RiBankCardFill, RiBarChartFill } from "react-icons/ri";

import "./Navabr.scss";

const Navbar = () => {
  return (
    <nav className="navbarWapper">
      <div className="topWapper">
        <div className="name_logo">
          <div className="logo"></div>
          <h2>Veritas</h2>
        </div>
        <ul>
          <li>MAIN MENU</li>
          <li className="active">
            <BiSolidDashboard />
            <Link>Dashboard</Link>
          </li>
          <li>
            <HiUsers />
            <Link>Users</Link>
          </li>
          <li>
            <RiBankCardFill />
            <Link>Accounts</Link>
          </li>
          <li>
            <RiBarChartFill />
            <Link>Statistics</Link>
          </li>
        </ul>
      </div>
      <div className="bottomWapper">
        <ul>
          <li>TEAMS</li>
          <li>
            <div className="circle"></div>
            <Link>Marketing</Link>
          </li>
          <li>
            <div className="circleBlue"></div>
            <Link>Development</Link>
          </li>
        </ul>
        <ul className="listList">
          <li>
            <IoMdSettings />
            <Link>Setting</Link>
          </li>
          <li>
            <AiOutlineLogout />
            <Link>Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
