import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CatComp = () => {
  const { category } = useParams(); // Get the category from the URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news for the specific category
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5001/api/news?category=${category}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]); // Fetches data every time the category changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div className="row">
        {news.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.headline} />
              <div className="card-body">
                <h5 className="card-title">{item.headline}</h5>
                <p className="card-text">{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

export default CatComp;
