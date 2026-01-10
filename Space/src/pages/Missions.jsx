import "../Missions.css";
import { useNavigate } from "react-router-dom";

export default function Missions() {

  const navigate = useNavigate();

  const missions = [
    {
      name: "Apollo 11",
      year: "1969",
      status: "Success",
      desc: "First human moon landing mission."
    },
    {
      name: "Chandrayaan-3",
      year: "2023",
      status: "Success",
      desc: "India’s lunar mission."
    },
    {
      name: "Mars Rover",
      year: "2012",
      status: "Ongoing",
      desc: "Exploring Mars surface."
    },
    {
      name: "Voyager 1",
      year: "1977",
      status: "Active",
      desc: "Interstellar mission."
    },
  ];

  return (
    <div className="mission-page">


      <h1>Space Missions 🚀</h1>

      <div className="mission-cards">
        {missions.map((m, index) => (
          <div className="mission-card" key={index}>
            <h2>{m.name}</h2>
            <p><b>Year:</b> {m.year}</p>
            <p><b>Status:</b> {m.status}</p>
            <p className="desc">{m.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
