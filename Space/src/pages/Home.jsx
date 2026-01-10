import { Link } from "react-router-dom";
import "../App.css";
//import { Link } from "react-router-dom"; // add at top
export default function Home() {
  return (
    <div className="hero">

      <img src="/space-bg.jpg" className="bg" />

      

      <div className="center">
        <h1>SPACE WORLD</h1>
        <p>
          Explore galaxies, join missions and experience the universe.
        </p>

        <button className="cta">Start Exploring 🚀</button>
      </div>

    </div>
  );
}
