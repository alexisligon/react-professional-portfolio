import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Portfolio() {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="container">
        <div className="row">
          <div>
          <img src={books} alt="books" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div>
          <img src={clouds} alt="clouds" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div>
          <img src={food} alt="food" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div>
          <img src={password} alt="password" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

          <div>
          <img src={planner} alt="planner" className="col-lg-4 col-md-6 mb-4 container"/>
          </div>

        </div>
      </div>
    </div>
  )
  ;
}

