import React from "react";
import "./Blog.css";
import BlogImage from '../../assets/blog/blog.jpg'

export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
                <h3>WE HELP BUSINESSES LAUNCH,GROW AND SUCCEED</h3>
                <p>From idea to execution, we provide expert guidance, strategic solutions, and innovative tools to help businesses thrive. Whether you're starting fresh or scaling up, we ensure your success with tailored strategies and continuous support.</p>
                <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                </div>
            </div>
              <div className="blog_col">
                <div className="blog_image">
                        <img src={BlogImage} alt="Blog"/>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
