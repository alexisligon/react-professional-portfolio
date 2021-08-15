import beachPic from "../../img/beach.jpg"

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>insert beach background pic here</h2>
      <div>
        <img src={beachPic} alt="beach" className="max-width: 100%"/>
      </div>
    </div>
  );
}
