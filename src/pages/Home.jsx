import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Finitism</h1>
            <p className="py-6">Explore our mission and join us in making a difference.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">About Us</h2>
            <p>Learn about the philosophy and history of Finitism.</p>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Problems & Issues</h2>
            <p>Explore the root problems we aim to address.</p>
            <Link to="/source-issues" className="btn btn-secondary">Explore Issues</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Policy & Advocacy</h2>
            <p>Discover our policy stances and advocacy efforts.</p>
            <Link to="/policy-hierarchy" className="btn btn-secondary">View Stances</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Consumer Activism</h2>
            <p>Your actions are your voice! Don't let it be stolen.</p>
            <Link to="/boycotts" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Charity Breakdown</h2>
            <p>Evaluate charities based on our rating system, with concrete impact metrics.</p>
            <Link to="/charities" className="btn btn-secondary">See Ratings</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Community Engagement</h2>
            <p>Join the discussion, or listen in. Either is better than tuning out.</p>
            <Link to="/discussion-forums" className="btn btn-secondary">Join Forums</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Updates & Errata</h2>
            <p>Adjustments, corrections, and clarifications are fundamental to a robust worldview.</p>
            <Link to="/project-updates" className="btn btn-secondary">View Updates</Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Get Involved</h2>
            <p>Find out how you can support and get involved.</p>
            <Link to="/get-involved" className="btn btn-secondary">Support Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 