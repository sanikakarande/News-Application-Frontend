/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

const News = () => {
  const [categories] = useState(["Politics", "Technology", "Sports"]);
  const [selectedCategory, setSelectedCategory] = useState("Politics");

  const newsData = {
    Politics: [
      {
        title: "Supreme Court Orders Separate Toilets For Trans People, Specially Abled In All Courts",
        description: "New Delhi:The Supreme Court on Wednesday ordered the construction and availability of separate toilet facilities for males, females, people with disabilities, and transgender persons in all court premises and tribunals across the country.",
        img: "https://c.ndtvimg.com/2024-12/k7nb8ha_supreme-court_625x300_18_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=250,height=188",
        link: "https://www.ndtv.com/india-news/a-basic-necessity-sc-orders-construction-of-toilet-facilities-in-all-court-premises-7481333",
      },
      {
        title: "Politics News Today highlights on January 10, 2025:",
        description: "Politics News Today highlights: In today’s complex political climate, understanding the latest developments is essential. Our Politics News delivers comprehensive coverage of government actions and significant political events both nationally and globally.",
        img: "https://www.livemint.com/lm-img/img/2025/01/10/600x338/ANI-20241214302-0_1736530552844_1736530561142.jpg",
        link: "https://www.livemint.com/politics/latest-politics-news-on-january-10-2025-live-updates-11736467214294.html",
      },
      {
        title: "Swiss Defense Minister Resigns Amid Criticism Over Military",
        description: "(Bloomberg) -- Swiss defense minister Viola Amherd announced her resignation, in an unexpected move that comes amid criticism of procurement projects for the nation’s military.",
        img: "https://images.livemint.com/img/2018/12/28/600x338/Politics_1545994646567.jpg",
        link: "https://www.livemint.com/politics/swiss-defense-minister-resigns-amid-criticism-over-military-11736982607427.html",
      },
      {
        title: "TIPRA Motha chief meets Congress leaders as BJP eyes pact",
        description: "AGARTALA: Tripura's main opposition party TIPRA Motha - led by royal scion Pradyot Kishore Debbarman met senior Congress leaders for a possible pre-poll tie up, days after ruling BJP claimed that he might join the saffron party.",
        img: "https://static.toiimg.com/thumb/msid-107974135,imgsize-77694,width-400,height-225,resizemode-72/107974135.jpg",
        link: "https://timesofindia.indiatimes.com/city/agartala/tipra-motha-chief-meets-congress-leaders-as-bjp-eyes-pact/articleshow/107974124.cms",
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
        title: "New Policy Announcements",
        description: "Government releases new policies for the year.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
      {
        title: "New Policy Announcements",
        description: "Government releases new policies for the year.",
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
        title: "New Policy Announcements",
        description: "Government releases new policies for the year.",
        img: "https://via.placeholder.com/300x200",
        link: "#",
      },
      {
        title: "Athlete Breaks Record",
        description: "A new world record in athletics.",
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
  };

  const videos = [
    {
      title: "Breaking News: AI Revolution",
      url: "https://www.youtube.com/watch?v=vFvGKhNKyl8",
    },
    {
      title: "Sports Highlights: Championship Moments",
      url: "https://www.youtube.com/watch?v=-mvUkiILTqI",
    },
    {
      title: "Latest Tech Innovations",
      url: "https://www.youtube.com/watch?v=04y0H01GTg0",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-banner">
        <div className="hero-overlay">
          <h1>Stay Updated with the Latest News</h1>
          <button className="btn btn-primary">Explore Now</button>
        </div>
        <img src="image.webp" alt="News Hero" />
      </div>

      {/* Search Section */}
      <div className="container my-4" id="search">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search news by keyword..."
        />
      </div>

      {/* Categories Section */}
      <div className="container my-5" id="categories">
        <h2 className="text-center mb-4">News Categories</h2>
        <div className="row text-center">
          {categories.map((category) => (
            <div
              className="col-md-4 mb-3"
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              <div
                className={`card category-card ${
                  selectedCategory === category ? "selected" : ""
                }`}
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
                <img
                  src={news.img}
                  className="card-img-top"
                  alt={`${selectedCategory} News`}
                />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  <a
                    href={news.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
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
            {videos.map((video, index) => (
              <div key={index} className="mb-3">
                <h6>{video.title}</h6>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h5>Image Gallery</h5>
            <img
              src="https://via.placeholder.com/400x300"
              className="img-fluid"
              alt="Gallery"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 NewsApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default News;
