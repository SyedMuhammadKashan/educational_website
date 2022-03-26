import React from 'react';
import "../Style/StyleAbout.css";
import {useContext} from 'react';
import { Mycontext } from '../context/FileContext';

 
const About=()=>{
   const [info, setinfo] = useContext(Mycontext);
   
 
  return (
    <div>
      <div className="container spacng">
        <h5 className="abut-head py-4">
          The world’s largest selection of online courses
        </h5>
        <div className="row">
          <div className="py-4 col-12 col-sm-7 col-md-7 col-lg-7 para">
            {info[0].parafirst}
          </div>
          <div className="col-12 col-sm-5 col-md-5 col-lg-5">
            <img className="rounded-right" src={info[0].paraimg} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <h5 className="py-4 ">{info[1].studentTitle}</h5>
            <p className="py-2 infotxt">{info[1].studentDescription}</p>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-5">
              <img src={info[1].studentImage} className=" impic " />
            </div>
          </div>
        </div>

        <div className="row ">
          <h4 className='py-2'> Become an Instructor</h4>

          <li className="parapoint">
            Techniques to engage effectively with vulnerable children and young
            people
          </li>
          <li className="parapoint">
            Join millions of people from around the world learning together
          </li>
          <li className="parapoint mb-5">
            Discover tools and techniques to engage effectively with vulnerable
            children and young people
          </li>
        </div>
      </div>
    </div>
  );
}
export default About;

