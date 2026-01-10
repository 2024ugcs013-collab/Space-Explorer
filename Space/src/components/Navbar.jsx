import { Link } from "react-router-dom";
import "../Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-left">
        <Link to="/login"><button>LOGIN</button></Link>
        <Link to="/signup"><button>SIGN UP</button></Link>
      </div>

      <div className="nav-right">
        <Link to="/explore"><button>Explore</button></Link>
        <Link to="/missions"><button>Missions</button></Link>
        <Link to="/community"><button>Community</button></Link>
      </div>

    </div>
  );
}
