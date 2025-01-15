import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container my-5">Loading news, please wait...</div>;
  if (error) return <div className="container my-5 text-danger">{error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest News</h2>
      <div className="row">
        {news.length > 0 ? (
          news.map((val, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
                <img
                  src={val.img || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={val.headline || "News image"}
                />
                <div className="card-body">
                  <h5 className="card-title">{val.headline}</h5>
                  <p className="card-text">
                    {val.description.length > 100
                      ? `${val.description.substring(0, 100)}...`
                      : val.description}
                  </p>
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h4>No news available at the moment.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
