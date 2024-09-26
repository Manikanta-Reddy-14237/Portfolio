import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className="sub-title">My <span>Skills</span></h1>
      <section className="Mskills" id="Skills">
        <div className="container1">
          <h1 className="heading1">Technical Skills</h1>
          <div className="Technical-bars">
            <div className="bar"><i style={{ color: "#c95d2e" }} className='bx bxl-html5'></i>
              <div className="info"><span>HTML</span></div>
              <div className="progress-line html"><span></span></div>
            </div>
            <div className="bar"><i style={{ color: "#147bbc" }} className='bx bxl-css3'></i>
              <div className="info"><span>CSS</span></div>
              <div className="progress-line css"><span></span></div>
            </div>
            <div className="bar"><i style={{ color: "#b0bc1e" }} className='bx bxl-javascript'></i>
              <div className="info"><span>JavaScript</span></div>
              <div className="progress-line Javascript"><span></span></div>
            </div>
            <div className="bar"><i style={{ color: "#c32ec9" }} className='bx bxl-python'></i>
              <div className="info"><span>Python</span></div>
              <div className="progress-line Python"><span></span></div>
            </div>
            <div className="bar"><i style={{ color: "#69bcbc" }} className='bx bxl-react'></i>
              <div className="info"><span>React</span></div>
              <div className="progress-line react"><span></span></div>
            </div>
          </div>
        </div>
        <div className="container1" id="Professional">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">90%</div>
              <div className="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">70%</div>
              <div className="text">Communication</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">75%</div>
              <div className="text">Problem Solving</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">85%</div>
              <div className="text">TeamWork</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
