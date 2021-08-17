// create a card for each project to display on portfolio page

import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';

export default function ProjectCard () {
    return (
        <div className="container">
      <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={books} alt="books" className="img-fluid d-block mx-auto"/>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={clouds} alt="clouds" className="img-fluid d-block mx-auto"/>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={food} alt="clouds" className="img-fluid d-block mx-auto"/>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={password} alt="clouds" className="img-fluid d-block mx-auto"/>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={planner} alt="clouds" className="img-fluid d-block mx-auto"/>
          </div>

      </div>
    </div>
    )
}