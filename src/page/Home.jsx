import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Home() {
  return (
    <div className="bg-primary-cstm">
      <Navbar />
      <div className="container text-white">
        <div>
          <h1 className="fw-bold mt-5 mb-3 ">Mingalaba</h1>
          <p>
            AstroPaper is a minimal, responsive, accessible and SEO-friendly
            Astro blog theme. This theme follows best practices and provides
            accessibility out of the box. Light and dark mode are supported by
            default. Moreover, additional color schemes can also be configured.
          </p>
          <p>
            AstroPaper is a minimal, responsive, accessible and SEO-friendly
            Astro blog theme. This theme follows best practices and provides
            accessibility out of the box. Light and dark mode are supported by
            default. Moreover, additional color schemes can also be configured.
          </p>
          <p>Read the blog posts or check README for more info.</p>
          <p>Social Links: </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
