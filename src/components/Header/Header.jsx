import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xoá token hoặc flag login
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token"); // nếu bạn lưu token

    navigate("/login");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignUp = () => {
    navigate("/signup");
  };

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
            {!isAuthenticated ? (
              // chưa đăng nhập -> hiện login, signup
              <>
                <button className="btn-login" onClick={handleClickLogin}>
                  Log in
                </button>
                <button className="btn-signup" onClick={handleClickSignUp}>
                  Sign up
                </button>
              </>
            ) : (
              // đã đăng nhập -> hiện settings
              <li className="nav-item dropdown">
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
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout} // ✅ sửa thành handleLogout
                    >
                      LogOut
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
