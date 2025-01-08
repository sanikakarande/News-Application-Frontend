import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";  ``

const News = () => {
  const [news, setNews] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the data
    axios
      .get("http://localhost:5000/api/news") // Ensure correct protocol (http)
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container my-5">
      <div className="row text-center">
        {news.map((val, index) => (
          <div key={index} className="col my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={val.img}
                className="card-img-top"
                alt={val.headline || "News image"}
              />
              <div className="card-body">
                <h5 className="card-title">{val.headline}</h5>
                <p className="card-text">{val.description}</p>
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Know more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
