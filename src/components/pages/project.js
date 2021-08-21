// create a card for each project to display on portfolio page

import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';

export default function ProjectCard() {
    return (

        <div className="row row-cols-1 row-cols-sm-3 g-4">

            <div className="col">
                <div className="card">
                <img src={books} alt="books" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"> Follow the Reader</h5>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <img src={food} alt="food" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"> GitHub Gastronomy</h5>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <img src={clouds} alt="storm clouds" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"> Weather App</h5>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <img src={password} alt="phonelock" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"> Password Generator</h5>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <img src={planner} alt="planner" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"> Day Planner</h5>
                </div>
                </div>
            </div>
        </div>

        

    )
}