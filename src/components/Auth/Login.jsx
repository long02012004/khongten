import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("quang long");
  };
  return (
    <div className={"login-container"}>
      <div className={"header"}>Don't have an account yet?</div>
      <div className={"title mx-auto col-4"}>Quang Long</div>
      <div className={"welcome col-4 mx-auto"}>hello Who are you?</div>
      <div className={"content-form col-4 mx-auto"}>
        <div className={"form-group col-4"}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            className={"form-control"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={"form-group col-4"}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            className={"form-control"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <span className="forgot-password">Forgot Password?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to QuangLong
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
