import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Portfolio() {
  return (
    <div className="container">
      <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 mb-4 container">
          <img src={books} alt="books" className="img-fluid d-block mx-auto"/>
          </div>

          <div className="row align-items-center">
          <img src={clouds} alt="clouds" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div className="row align-items-center">
          <img src={food} alt="food" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div className="row align-items-center">
          <img src={password} alt="password" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div className="row align-items-center">
          <img src={planner} alt="planner" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

      </div>
    </div>
  )
  ;
}

