import React from 'react';
import {useContext} from "react";
import {Mycontext} from "../context/FileContext.js";
function Viewit(){
  const[info,setinfo]=useContext(Mycontext);
    return (
      <div style={{ backgroundColor: "#f5f5f5" }}>
        {info.map((el) => {
          const { cid, cname, cdescp } = el;

          return (
            <div>
              <h2>{cname}</h2>
              <hr />
              <p>{cdescp}</p>
            </div>
          );
        })}
      </div>
    );
}
export default Viewit;