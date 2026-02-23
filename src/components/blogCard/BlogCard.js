import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={isDark ? "blog-container dark-mode" : "blog-container"}
      onClick={() => openUrlInNewTab(blog.url)}
    >
      <a
        className="blog-card"
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.preventDefault()}
      >
        <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
          {blog.title}
        </h3>
        <p className={isDark ? "small-dark small" : "small"}>
          {blog.description}
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
}
