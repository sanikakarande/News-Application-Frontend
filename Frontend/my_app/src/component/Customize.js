import React, { useState } from "react";

const Customize = () => {
  const [insights] = useState([
    { title: "AI in News: Transforming Media", sentiment: "Positive", summary: "AI is revolutionizing how news is delivered..." },
    { title: "Climate Change Update", sentiment: "Neutral", summary: "Scientists release the latest climate report..." },
    { title: "Tech Stocks Soar", sentiment: "Positive", summary: "Tech companies report record-breaking profits..." },
  ]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🤖 AI-Powered Insights</h2>
      <div className="row">
        {insights.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p><strong>Sentiment:</strong> {item.sentiment}</p>
                <p className="card-text">{item.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customize;
