/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

const News = () => {
  const [categories] = useState(["Politics", "Technology", "Sports"]);
  const [selectedCategory, setSelectedCategory] = useState("Politics");

  const newsData = {
    Politics: [
      {
        title: "Election Updates",
        description: "Latest updates from the recent elections.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
      {
        title: "New Policy Announcements",
        description: "Government releases new policies for the year.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
    ],
    Technology: [
      {
        title: "AI Revolution",
        description: "How AI is shaping the future.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
      {
        title: "Tech Giants Collaborate",
        description: "Big tech companies partner for a sustainable future.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
    ],
    Sports: [
      {
        title: "Championship Highlights",
        description: "Top moments from the recent championships.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
      {
        title: "Athlete Breaks Record",
        description: "A new world record in athletics.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-banner">
        <h1>Stay Updated with the Latest News</h1>
        <img src="image.webp"></img>
      </div>

      {/* Search Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <input type="text" className="form-control" placeholder="Search news by keyword..." />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container my-5" id="categories">
        <h2 className="text-center mb-4">News Categories</h2>
        <div className="row text-center">
          {categories.map((category) => (
            <div className="col-md-4 mb-3" key={category}>
              <div
                className={`card ${selectedCategory === category ? "bg-primary text-white" : ""}`}
                onClick={() => setSelectedCategory(category)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{category}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Category News Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">{selectedCategory} News</h2>
        <div className="row">
          {newsData[selectedCategory].map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card news-card">
                <img src={news.img} className="card-img-top" alt={`${selectedCategory} News`} />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  <a href={news.link} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multimedia Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Multimedia</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>Latest Videos</h5>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example"
              title="YouTube video"
            ></iframe>
          </div>
          <div className="col-md-6">
            <h5>Image Gallery</h5>
            <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Gallery Image" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-light">
        <p className="text-center">&copy; 2025 NewsApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default News;
