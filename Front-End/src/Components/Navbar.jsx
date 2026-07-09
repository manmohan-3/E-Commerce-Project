import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          ⚡ ElectroMart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Products"
            />
            <button className="btn btn-light">
              Search
            </button>
          </form>

          <Link className="btn btn-outline-light me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-warning" to="/register">
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;