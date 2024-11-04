import React from "react";
import Navbar from "../component/Navbar";

export default function NotFound() {
  return (
    <div className="bg-primary-cstm">
      <Navbar />
      <div className="container  text-white ">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img className="imgnotfound-cstm" src="/notFound.png" alt="" />
        </div>
      </div>
    </div>
  );
}
