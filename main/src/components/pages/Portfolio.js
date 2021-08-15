import books from '../../img/books.jpg';
import clouds from '../../img/clouds.jpg';
import food from '../../img/food.jpg';
import password from '../../img/password.jpg';
import planner from '../../img/planner.jpg';

export default function Portfolio() {
  return (
    <div>
      <img src={books} alt="books"/>
      <img src={clouds} alt="clouds"/>
      <img src={food} alt="food"/>
      <img src={password} alt="password"/>
      <img src={planner} alt="planner"/>
    </div>
  )
  ;
}