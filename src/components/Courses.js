import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import "../Style/StyleCourse.css";
const Courses=()=>{

    return (
      <div className="container">
        <h3 className="coursehead">The Courses We provide</h3>
        <li>
          <NavLink to="/courses/whatsnew">What's New </NavLink>
        </li>
        <li>
          <NavLink to="/courses/addcourse">Suggest any Course</NavLink>
        </li>
        <li>
          <NavLink to="/courses/viewit">View it !</NavLink>
        </li>
        <Outlet/>
      </div>
    );
}

export default Courses;