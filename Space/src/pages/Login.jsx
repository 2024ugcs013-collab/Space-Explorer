import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-container">

      <form className="login-box">
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

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
