import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Build Your Portfolio</h1>
          <p className="py-6">
            Create a professional portfolio website with ease! Showcase your skills, projects, and
            accomplishments in a personalized, stunning website that represents your unique style.
          </p>
          <Link to="/register">
          <button className="btn btn-primary">Start Building Now</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
