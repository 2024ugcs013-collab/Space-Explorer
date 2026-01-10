import "./Explore.css";
import { useNavigate } from "react-router-dom";

export default function Explore() {

  const navigate = useNavigate();

  const planets = [
    { name: "Earth", emoji: "🌍", desc: "Our home planet" },
    { name: "Mars", emoji: "🔴", desc: "The red planet" },
    { name: "Saturn", emoji: "🪐", desc: "Planet with rings" },
    { name: "Moon", emoji: "🌙", desc: "Earth's satellite" },
  ];

  return (
    <div className="explore-page">

      {/* Back Button */}
      

      <h1>Explore Space 🚀</h1>

      <input
        className="search"
        placeholder="Search planets..."
      />

      <div className="cards">
        {planets.map((p, index) => (
          <div className="card" key={index}>
            <div className="emoji">{p.emoji}</div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button>View More</button>
          </div>
        ))}
      </div>

    </div>
  );
}
