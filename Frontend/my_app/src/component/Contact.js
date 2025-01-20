import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly!
      </p>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> support@newsapp.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 News Street, Media City, NY 56789</p>
      </div>
    </div>
  );
};

export default Contact;
