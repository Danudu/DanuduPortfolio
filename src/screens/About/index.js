import React from "react";

function About() {
  return (
    <div>
      <a id="about" />
      <div className="columns">
        <div className="column is-5 has-text-centered">
          <img className="main_image2" src="/images/v13_27.png" />
        </div>
        <div className="column is-7">
          <h1 className="title_pg2">ABOUT ME</h1>
          <h1 className="content_1">Undergraduate BSc. Information Systems</h1>
          <h1 className="content_2">
            A motivated, organized, and goal-oriented undergraduate with a wide
            range of expertise across many different fields, including, In
            addition to a university degree in information systems, IT, Media,
            Photography, Cinematography &amp; Editing seeks a professional
            opportunity where they may collaborate with some of the top experts
            and exceptional talent from across the world.
          </h1>
          <a href="#home">
            {" "}
            <p>
              <i
                style={{
                  fontSize: "80px",
                  paddingLeft: "700px",
                  paddingTop: "150px",
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

export default About;
