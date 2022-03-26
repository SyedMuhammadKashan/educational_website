import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Courses from "./components/Courses.js";
import Whatsnew from "./components/Whatsnew";
import Addcourse from "./components/Addcourse";
import Viewit from "./components/Viewit";
import Contact from "./components/Contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import {InfoProviderfun} from "../src/context/FileContext.js";

const App = () => {
  return (
    <BrowserRouter>
      <InfoProviderfun>
        <div>
          <MenuBar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Courses" element={<Courses />} >
             <Route path="whatsnew" element={<Whatsnew/>}/>
             <Route path="addcourse" element={<Addcourse/>}/>
             <Route path="viewit" element={<Viewit/>}/>
                 </Route>
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </InfoProviderfun>
    </BrowserRouter>
  );
};

export default App;
