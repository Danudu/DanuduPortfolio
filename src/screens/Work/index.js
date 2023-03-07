import React from "react";

function Work() {
  return (
    <div>
      <a id="work" />
      <div className="columns">
        <div className="column is-5">
          <h1 className="title_pg4">WORK &amp; SKILLS</h1>
          <h1 className="sub_title">Educational</h1>
          <h1 className="content_3">
            <ul>
              <li>C/C++ Programming</li>
              <li>Adobe CC Collection Designing</li>
              <li>UI/UX Design</li>
              <li>FiveM Server Development</li>
              <li>Mlo Designing</li>
            </ul>
            <img className="clogo" src="/logos/v19_24.png" />
            <img className="adobe" src="/logos/v21_53.png" />
          </h1>
          <h1 className="sub_title">Other</h1>
          <h1 className="content_3">
            <ul>
              <li>Photographer</li>
              <li>Hockey/Football/Badminton Player</li>
              <li>Videographer</li>
              <li>Gamer</li>
              <li>YouTuber</li>
            </ul>
            <img className="yt" src="/logos/v19_25.png" />
          </h1>
        </div>
        <a id="contact" />
        <div className="column is-7">
          <h1 className="sub_title2">Contact Me</h1>
          <p className="font">
            <i
              style={{ color: "green", fontSize: "50px" }}
              className="fa-brands fa-square-whatsapp"
            />
            +94712592209
          </p>
          <p className="font">
            <i
              style={{ color: "rgb(26, 0, 128)", fontSize: "50px" }}
              className="fa-brands fa-square-facebook"
            />
            <a href="https://www.facebook.com/danudu.madusha.92/">
              Danudu Madusha
            </a>
          </p>
          <p className="font">
            <i
              style={{ color: "rgb(96, 68, 205)", fontSize: "50px" }}
              className="fa-brands fa-discord"
            />
            HeRa_RC#0273
          </p>
          <p className="font">
            <i
              style={{ color: "rgb(255, 0, 0)", fontSize: "50px" }}
              className="fa-brands fa-square-youtube"
            />
            <a href="https://www.youtube.com/@heragaming5235">HeRa Gaming</a>
          </p>
          <p className="font">
            <i
              style={{ color: "rgb(0, 0, 0)", fontSize: "50px" }}
              className="fa-solid fa-g"
            />
            danudumadushakg@gmail.com
          </p>
          <a href="#home">
            {" "}
            <p>
              <i
                style={{
                  fontSize: "80px",
                  paddingLeft: "700px",
                  paddingTop: "100px",
                }}
                className="fa-solid fa-angle-up uparrow"
              />
            </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
