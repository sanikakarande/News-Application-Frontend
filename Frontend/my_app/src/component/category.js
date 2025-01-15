import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams(); // Get the category from the URL
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data for the specific category
    fetch(`http://localhost:5001/api/news?category=${category}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div className="container">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div className="row">
        {news.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.headline} />
              <div className="card-body">
                <h5 className="card-title">{item.headline}</h5>
                <p className="card-text">{item.description}</p>
                <a href={item.link} target="_blank" className="btn btn-primary" rel="noreferrer">
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

export default Category;
