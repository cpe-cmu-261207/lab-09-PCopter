import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        <div className="mx-auto text-center" style={{ maxwidth: "600px" }}>
          <div cclassName="vstack gap-1 border border-2 rounded-3 p-4">
            <img
              src="https://pbs.twimg.com/media/Dtu0J54U0AETwBY.jpg:large"
              width="100"
              height="100"
              style={{ objectfit: "cover;" }}
              className="rounded-circle mx-auto text-center"
            />
            <div>
              <span className="text-center">
                ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
              </span>
              <p>
                <span className="fw-bold text-center">Name </span>
                <span>Phanuwat Wongworrakulkit</span>
              </p>
              <p>
                <span className="fw-bold text-center">Nick Name </span>
                <span>Copter </span>
              </p>
              <p>
                <span className="fw-bold text-center">Facebook </span>
                <a
                  href="https://www.facebook.com/phanuwatwongworrakulkit"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.facebook.com/phanuwatwongworrakulkit
                </a>
              </p>
              <p>
                <span className="fw-bold text-center">Email </span>
                <a href="mailto:phanuwat_w@cmu.ac.th" target="_blank">
                  phanuwat_w@cmu.ac.th
                </a>
              </p>
              <p>
                <span className="fw-bold text-center">Phone </span>
                <span>091-8188330</span>
              </p>
              <span className="text-center">
                ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
              </span>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
