import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <header className="masthead bg-primary text-white text-center">
        <p class="masthead-subheading font-weight-light mb-0">
          Programer - Web Designer - Web Developer
        </p>
        <div class="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5 rounded-3"
            src="https://c.tenor.com/E33HkUhvr9EAAAAC/welcome.gif"
            style={
              ({ backgroundcolor: "rgb(98, 199, 254)" },
              { border: "rgb(8, 145, 237)" },
              { solid: "20px;" })
            }
            alt="..."
          />
        </div>
      </header>
    </div>
  );
}
