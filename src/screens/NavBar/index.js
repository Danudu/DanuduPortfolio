import React from "react";

function NavBar() {
  return (
    <div>
      <a id="home" />
      <nav
        className="navbar has-background-white-bis"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.danudumadusha.com">
            <img src="/images/v3_3.png" />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="#home" className="navbar-item padding">
              {" "}
              HOME{" "}
            </a>
            <a href="#about" className="navbar-item padding">
              {" "}
              ABOUT ME{" "}
            </a>
            <a href="#achivements" className="navbar-item padding">
              {" "}
              ACHIEVEMENTS{" "}
            </a>
            <a href="#work" className="navbar-item padding">
              {" "}
              WORK &amp; SKILLS{" "}
            </a>
          </div>
          {/* <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
