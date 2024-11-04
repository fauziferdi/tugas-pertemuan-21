import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  ">
      <div className="container">
        <Link className="navbar-brand fs-4 fw-bold text-white" to="/">
          AstroPaper
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to="/post"
              >
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tags">
                Tags
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/archive">
                <i className="bi bi-archive"></i>
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/seaarch">
                <i className="bi bi-search"></i>
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/theme">
                <i className="bi bi-brightness-high"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
