import "./App.css";
import { Outlet, Link } from "react-router-dom";``
import Header from "./components/Header/Header.jsx";


function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      
    </>
  );
}

export default App;
