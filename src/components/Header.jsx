import React from "react";
import { Link } from "react-router-dom";
// import './header.css';
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ background: "#798777" }}>
      {/* logo */}
      <Link className="navbar-brand" style={{ color: "#F8EDE3" }} to="#">
        
      </Link>

      {/* burger dropdown */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        {/* search form */}
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-info my-2 my-sm-0"
            type="submit"
            style={{ color: "#F8EDE3", border: "1px solid #BDD2B6" }}
          >
            Search
          </button>
        </form>

        {/* menu list */}
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <Link className="nav-link" style={{ color: "#F8EDE3" }} to="/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" style={{ color: "#F8EDE3" }} to="/study">
              Study ReactJS
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" style={{ color: "#F8EDE3" }} to="/about">
              About Me
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link"
              style={{ color: "#F8EDE3" }}
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div>
          <Link style={{ marginRight: "20px", color: "#F8EDE3" }} to="/login">
            SIGN IN
          </Link>
          <Link
            style={{ marginRight: "20px", color: "#F8EDE3" }}
            to="/register"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
