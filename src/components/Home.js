import React from "react";
import { FaLayerGroup, FaChartLine, FaClipboardList } from "react-icons/fa";
import "../Style/StyleHome.css";
const Home = () => {
  return (
    <div >
      <img 
        src="https://ucscextension-live-28cd95cf77884d15bb06-01c17c1.divio-media.net/images/iStock-1205300906_Remote_Her.2e16d0ba.fill-2400x858-c100.jpg"
        className=" container-fluid bannerpic"
      />
      {/* banner img end */}

      {/* content sec1 */}
      <div className="container  sec1">
        <h2 className="text-center py-5 sec-head mb-5">
          Welcome to WebiStudy !
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <FaLayerGroup
              size="54px"
              color="EB7732"
              className="fonts-iconsstyle"
            />
            <p className="para-style">
              In order to succeed, your desire for success should be greater
              than your fear of failure
            </p>
          </div>

          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <FaChartLine
              size="54px"
              color="EB7732"
              className="fonts-iconsstyle"
            />
            <p className="para-style">
              Education is the most powerful weapon which you can use to change
              the world
            </p>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <FaClipboardList
              size="54px"
              color="EB7732"
              className="fonts-iconsstyle"
            />
            <p className="para-style">
              “It’s not that I’m so smart, it’s just that I stay with problems
              longer”
            </p>
          </div>
        </div>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-sm-6">
              <img
                src="https://media.gettyimages.com/photos/in-the-classroom-multi-ethnic-students-listening-to-a-lecturer-and-picture-id962475722?b=1&k=20&m=962475722&s=170667a&w=0&h=qf0gplxaEFrCsdz5T0r7G1aXoZr6_4WkJh0Odr1MHYg="
                className="img-fluid mt-5 "
                style={{ borderRadius: "23px" }}
              />
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-lg-6">
              <p className="para-style mt-5">
                Imagine that studying is enjoyable. You set your goals and
                accomplish them. You get help and guidance. You join a live
                study stream room and feel supported. You see progress! You
                celebrate your achievements alongside thousands of students.
                Imagine there is always someone there for you. Imagined? Here we
                are!
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <p className="para-style  mt-5">
                It is very difficult to compare any technology in respect of
                more effect and impact than the other, although we can certainly
                appreciate medical breakthroughs that technology has brought up
                in our lives like vaccinations, transplants and new antibiotics.
                Times have revolutionized and the world has become faster
              </p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ta_VZVRYAJIsAPPg9DXHnrIgxv4YwppLYQ&usqp=CAU"
                className="img-fluid mt-5 "
                style={{ borderRadius: "23px" }}
              />
            </div>
          </div>
          <div className="row">
            <h5 className="text-center para-style mt-5 py-5">Learn & Grow</h5>

            {/* imgaegallery part */}

            <div className="container">
              <div className="row ">
                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid" 
                    src="https://icts.io/wp-content/uploads/2020/04/f71e4362-cb61-425b-9993-e75446351f78.jpg"
                  />
                </div>
                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNivBkUuz8Xmud38M-2hBsmoNcyeCoQbSvxuFPz_SmIim__0xXZdDHcfztZ9mRrmGCVM&usqp=CAU"
                  />
                </div>

                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aAiVIWnfP7NFYmQmZWM_dw3_zv_aJ-JMnw&usqp=CAU"
                  />
                </div>

                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid"
                    src="https://ih1.redbubble.net/image.1057190214.1918/flat,750x1000,075,f.u1.jpg"
                  />
                </div>

                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid"
                    src="https://symbols.getvecta.com/stencil_89/36_nestjs.3997c99dfe.png"
                  />
                </div>

                <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                  <img
                    className="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaoGOCzDsvL-ZA3uIZ-4naQL9wfTX9YEdZvagCx6LHi6mll4h5uZIywg6vJBeZ2hX8rM&usqp=CAU"
                  />
                </div>
              
              
              
              
              
              
              </div>
            
            
            
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
