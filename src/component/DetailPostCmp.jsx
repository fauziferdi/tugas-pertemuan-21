import React from "react";

export default function DetailPostCmp({ post }) {
  return (
    <div className="container mt-5 text-white">
      <h1 className="fw-bold title-cstm">{post.title}</h1>
      <p>
        <i class="bi bi-calendar"></i> Updated: Oct 14, 2024 | at 09:27 AM
      </p>
      <article
        class="mb-4 mt-5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
