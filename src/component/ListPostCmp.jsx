import React from "react";

import { Link } from "react-router-dom";

export default function ListPostCmp({ dataPosts }) {
  return (
    <>
      <div className="container mt-5 text-white">
        <div className="mb-4">
          <h1 className="fw-bold title-cstm">Posts</h1>
          <p>All the articles I've posted.</p>
        </div>
        {dataPosts.map((post) => (
          <ul className="list-group">
            <li className="list-group-item border-0 text">
              <div>
                <h5 className="mb-1 title-cstm">
                  <Link
                    to={"/post/" + post.id}
                    className="text-decoration-none title-cstm"
                  >
                    {post.title}
                  </Link>
                </h5>
                <small className="text-white">
                  <i class="bi bi-calendar me-2"></i> Updated: Oct 14, 2024 | at
                  09:27 AM
                </small>
                <p className="mb-1 text-white">{post.desc}</p>
              </div>
            </li>
          </ul>
        ))}
        <nav>
          <div className="d-flex justify-content-center mt-5">
            <Link className="text-decoration-none text-white me-2">
              <i class="bi bi-arrow-left-short"></i> Prev
            </Link>
            <p className="text-decoration-none text-white">1 of 1</p>
            <Link className="text-decoration-none text-white ms-2">
              Prev <i class="bi bi-arrow-right-short "></i>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
