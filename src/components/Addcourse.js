import React from "react";
import { useContext, useState } from "react";
import { Mycontext } from "../context/FileContext.js";
function Addcourse() {
  const [name, setname] = useState("");
  const [descp, setdescp] = useState("");
  const [info, setinfo] = useContext(Mycontext);

  const updatenamefun=(e)=>{
            return(setname(e.target.value))
  }
  const updatedescriptionfun=(e)=>{
            return(setdescp(e.target.value))
  }

  const courseaddedfun=(e)=>{
          e.preventDefault();
        setinfo((prev) => [...prev, { cname: name, cdescp:descp}]);
          
  }

  return (
    <div>
      <form onSubmit={courseaddedfun}>
        <input
          type="text"
          value={name}
          placeholder="Suggest Course Name"
          onChange={updatenamefun}
        />
        <input
          type="text"
          value={descp}
          placeholder="Write its description"
          onChange={updatedescriptionfun}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Addcourse;
