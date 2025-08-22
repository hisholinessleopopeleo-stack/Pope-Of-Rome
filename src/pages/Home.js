import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome, Beloved — Let Love Lead</h1>
          <p>A place of hope, prayer, and support.</p>
          <button onClick={() => navigate("/help")}>Get Support</button>
        </div>
      </section>
    </div>
  );
}

export default Home;