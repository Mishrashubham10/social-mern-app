import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        {/* Left */}
        <div className="left">
          <h1>Login With Us.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem est possimus quasi distinctio odio! Reiciendis.
          </p>
          <span>Dont you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        {/* Right */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
