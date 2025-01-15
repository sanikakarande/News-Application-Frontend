import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>News Categories</h1>
      <div className="row">
        <div className="col-md-4">
          <Link to="/politics" className="btn btn-primary btn-block">
            Politics
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/technology" className="btn btn-secondary btn-block">
            Technology
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/sports" className="btn btn-success btn-block">
            Sports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
