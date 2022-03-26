import React from 'react';
import "../Style/StyleFooter.css";
import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footercss">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <h5 className="py-3 fhead">WebiStudy</h5>
              <li className="txtcolor"><Link to='#'>Support</Link></li>
              <li className="txtcolor"><Link to='#'>Testmonial</Link></li>
              <li className="txtcolor"><Link to='#'>Privacypolicy</Link></li>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <p className="py-3 txtcolor"><li className="txtcolor"><Link to="#">Subscribe Our Newsletter</Link></li></p>
              <input className='inpt' type="text" placeholder="email@example.com" required />
            </div>

            <p className="text-center txtcolor">
              Copyright ©2022 All rights reserved | Made by smk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer;