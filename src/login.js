import { useState } from "react";

const Login = ({ handleLogin, errorMessage }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h4> Login </h4>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </form>
      <button onClick={() => handleLogin(userName, password)}>Signin</button>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
};

export default Login;
