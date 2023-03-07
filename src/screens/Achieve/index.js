import React from "react";

function Achieve() {
  return (
    <div>
      <a id="achivements" />
      <div className="columns">
        <div className="column is-7">
          <h1 className="title_pg3">ACHIEVEMENTS</h1>
          <h1 className="content_3">
            <ul>
              <li>Got selected to UCSC (2020)</li>
              <li>
                Started University sports life by Joining to UOC Hockey team
                (2021)
              </li>
              <li>
                GCE Ordinary Level <b>2016</b> - 7A’s &amp; 2B’s
              </li>
              <li>
                GCE Advanced Level <b>2019</b> - 3C’s <b>2020</b> - 3B’s
              </li>
              <li>
                2022 UOC Freshers Tournament Vice Captain of the(UCSC) Champions
                Team. <br />
                (Most goal scorer UOC Freshers Hockey)
              </li>
              <li>Freshers Badminton team Member (UCSC)</li>
              <li>Freshers Football team Member (UCSC)</li>
              <li>
                Recognized as the young upcoming wildlife photographer in public
                midea
              </li>
            </ul>
          </h1>
          <a href="#home">
            {" "}
            <p>
              <i
                style={{
                  fontSize: "80px",
                  paddingTop: "100px",
                  paddingLeft: "90px",
                }}
                className="fa-solid fa-angle-up uparrow"
              />
            </p>
          </a>
        </div>
        <div className="column is-5 has-text-centered">
          <img className="main_image3" src="/images/v18_6.png" />
        </div>
      </div>
    </div>
  );
}

export default Achieve;
