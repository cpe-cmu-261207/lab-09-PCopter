import React from "react";
import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundcolor: "rgb(98, 199, 254)" }}
        className="container"
      >
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          My skills
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal4"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-50 w-50">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded-3"
                src="https://www.kruja.club/img/dev-visual-c-plus-plus-logo-icon-11.png"
                style={
                  ({ backgroundcolor: "rgb(4, 121, 254)" },
                  { padding: "20px" },
                  { border: "rgb(252, 135, 81);" },
                  { solid: "20px;" },
                  { objectfit: "cover;" })
                }
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal5"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-50 w-50">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded-3"
                style={
                  ({ backgroundcolor: "rgb(4, 121, 254)" },
                  { padding: "20px" },
                  { border: "rgb(252, 135, 81);" },
                  { solid: "20px;" },
                  { objectfit: "cover;" })
                }
                src="https://www.npsrobot.com/wp-content/uploads/2018/05/scratchdl.jpg"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal6"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-50 w-50">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded-3"
                src="https://www.pngplay.com/wp-content/uploads/12/Ping-Pong-Ball-PNG-Photos.png"
                style={
                  ({ backgroundcolor: "rgb(4, 121, 254)" },
                  { padding: "20px" },
                  { border: "rgb(252, 135, 81);" },
                  { solid: "20px;" },
                  { objectfit: "cover;" })
                }
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Resume
          </h2>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Hi,My name is Phanuwat Wongworrakulkit. I am studying in
                Chiangmai University. I am studying in faculty of Computer
                Engineering. In the future i want to be a wealthy and healthy
                man
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                I used to learn about languages C++ and Scratch. In my freetime
                i always learns about coding and plays Valorant or Ping-Pong.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
