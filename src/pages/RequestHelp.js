import React, { useState } from "react";

function RequestHelp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <h2>Request Help</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Describe your need" required></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>🙏 Thank you. Your request has been received. We will reach out soon.</p>
      )}
    </div>
  );
}

export default RequestHelp;