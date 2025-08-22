import React, { useState } from "react";

function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <h2>Prayer Requests</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Your Prayer Request" required></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>🙏 Thank you. Your prayer request has been received.</p>
      )}
    </div>
  );
}

export default PrayerRequest;