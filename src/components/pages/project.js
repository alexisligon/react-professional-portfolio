// create a card for each project to display on portfolio page

import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';

export default function ProjectCard() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mb-4 container">
                    <figure>
                        <img src={books} alt="books" className="img-fluid d-block mx-auto" />
                        <figcaption>Follow the Reader</figcaption>
                    </figure>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 container">
                    <figure>
                        <img src={clouds} alt="clouds" className="img-fluid d-block mx-auto" />
                        <figcaption>Weather App</figcaption>
                    </figure>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 container">
                    <figure>
                        <img src={food} alt="food" className="img-fluid d-block mx-auto" />
                        <figcaption>Global Gastronomy</figcaption>
                    </figure>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 container">
                    <figure>
                    <img src={password} alt="phonelock" className="img-fluid d-block mx-auto" />
                    <figcaption>Password Generator</figcaption>
                    </figure>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 container">
                    <figure>
                    <img src={planner} alt="planner" className="img-fluid d-block mx-auto" />
                    <figcaption>Day Planner</figcaption>
                    </figure>
                </div>

            </div>
        </div>
    )
}