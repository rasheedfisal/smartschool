import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";
import AnimatedPage from "../common/AnimatedPage";

const Blog = () => {
  return (
    <AnimatedPage>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Blog;
