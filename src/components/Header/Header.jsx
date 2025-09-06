import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClickSignUp = () => {};
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5">
      <div className="container-fluid ">
        <NavLink to="/" className="navbar-brand">
          Quang Long
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admins">
                Admin
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <button className="btn-login" onClick={() => handleClickLogin()}>
              Log in
            </button>
            <button className="btn-signup" onClick={() => handleClickSignUp()}>
              Sign up
            </button>
            {/*  <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    LogIn
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LogOut
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
