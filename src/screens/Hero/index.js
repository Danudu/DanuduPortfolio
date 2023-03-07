import React from "react";

function Hero() {
  return (
    <div className="columns">
      <div className="column is-7">
        <div className="hero">
          <h1 className="title_1">Hi! I'm</h1>
          <h1 className="title_2">Danudu Madusha</h1>
          <h1 className="title_3">Undergraduate BSc. Information Systems</h1>
          <a href="#about">
            {" "}
            <button className="button is-black">ABOUT ME</button>
          </a>
          <a href="#contact">
            {" "}
            <button className="button is-black mt-4">CONTACT ME</button>
          </a>
        </div>
      </div>
      <div className="column is-5 has-text-centered">
        <img className="main_image" src="/images/v3_7.png" />
      </div>
    </div>
  );
}

export default Hero;
