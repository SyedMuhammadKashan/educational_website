import React from "react";
import { Link } from "react-router-dom";
import "../Style/StyleMenu.css";
const MenuBar = () => {
  return (
    <div>
      <div className="container-fluid">
        <ul className=" navi ">
          <li className="list-item "> WebiStudy</li>
          <li className="list-item ">
            <Link to="/Home">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/About">About</Link>
          </li>
          
            <li className="list-item">
              <Link to="/Courses">Courses</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
