import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div classname="container-fluid">
          <Link classname="navbar-brand" to="/">
            Navbar
          </Link>
          <div classname="collapse navbar-collapse">
            <ul classname="navbar-nav me-auto">
              <li classname="nav-item">
                <Link classname="nav-link" to="/">
                  home
                </Link>
              </li>
              <li classname="nav-item">
                <link classname="nav-link" to="/about">
                  About
                </link>
              </li>
            </ul>
            <link classname="btn btn-primary mx-1" to="/login">
              login
            </link>
            <link classname="btn btn-primary mx-1" to="/signup">
              signup
            </link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
