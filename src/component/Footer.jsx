import React from "react";

export default function Footer() {
  return (
    <footer className="container bg-primary-cstm text-white mt-5 ">
      <hr class=" color-border-cstm  "></hr>
      <div className="d-flex justify-content-between">
        <div>
          <p>Copyright © 2024 | All rights reserved.</p>
        </div>
        <div>
          <p>
            <i class="bi bi-github me-2 fs-3"></i>
            <i class="bi bi-facebook me-2 fs-3"></i>
            <i class="bi bi-instagram me-2 fs-3"></i>
            <i class="bi bi-twitter me-2 fs-3"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
