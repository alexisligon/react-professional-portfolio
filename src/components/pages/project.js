/* eslint-disable react/jsx-no-target-blank */
// create a card for each project to display on portfolio page

import books from "../../img/books.jpg";
import clouds from "../../img/clouds.jpg";
import food from "../../img/food.jpg";
import password from "../../img/password.jpg";
import planner from "../../img/planner.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ProjectCard() {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="container">
        <header className="text-center mb-5">
          <h2 className="text-uppercase lined"> Projects</h2>
        </header>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 container">
            <a
              href="https://tmaxey201.github.io/Recipe-with-translator/index.html"
              target="_blank"
            >
              <div class="text-center lead">Global Gastronomy</div>
              <img
                src={food}
                alt="bowl of pesto pasta with tomato garnish on a white background"
                className="img-fluid d-block mx-auto"
              />
            </a>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
            <a href="https://follow-the-reader.herokuapp.com/" target="_blank">
              <div className="text-center lead">Follow the Reader</div>
              <img
                src={books}
                alt="hand supporting six books horizontally on an offwwhite background"
                className="img-fluid d-block mx-auto"
              />
            </a>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
                <a
                  href="https://alexisligon.github.io/weather-dash/"
                  target="_blank"
                >
                  <div className="text-center lead">Weather Dashboard</div>
                  <img
                    src={clouds}
                    alt="dark stormy clouds"
                    className="img-fluid d-block mx-auto"
                  />
                </a>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 container">
                <a
                  href="https://alexisligon.github.io/work-day-scheduler/"
                  target="_blank"
                >
                  <div className="text-center lead">Day Planner</div>
                  <img
                    src={planner}
                    alt="minimalist planner with pretty pink flowers"
                    className="img-fluid d-block mx-auto"
                  />
                </a>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 container">
                <a
                  href="https://alexisligon.github.io/password-generator/"
                  target="_blank"
                >
                  <div className="text-center lead">Password Generator</div>
                  <img
                    src={password}
                    alt="phone with lockpad and purple screensaver over a yellow background "
                    className="img-fluid d-block mx-auto"
                  />
                </a>
              </div>

        </div>
      </div>
    </div>
  );
}
