import React, { useState, useEffect } from "react";

const TrendingNews = () => {
  const [trendingArticles, setTrendingArticles] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch trending news
    fetch("https://api.example.com/trending-news")
      .then((response) => response.json())
      .then((data) => setTrendingArticles(data))
      .catch((error) => console.error("Error fetching trending news:", error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🔥 Trending News</h2>
      <div className="row">
        {trendingArticles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.summary}</p>
                <a href={article.link} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
