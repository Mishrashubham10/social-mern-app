import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        {/* Left */}
        <div className="left">
          <h1>Register Yourself.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem est possimus quasi distinctio odio! Reiciendis.
          </p>
          <span>Already have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        {/* Right */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
