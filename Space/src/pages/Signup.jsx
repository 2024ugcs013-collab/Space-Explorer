import "./Login.css"; // reuse same CSS
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  return (
    <div className="login-container">

      <form className="login-box">
        <h2>Sign Up</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Sign Up</button>

        {/* Back button */}
        <p 
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>

      </form>

    </div>
  );
}
