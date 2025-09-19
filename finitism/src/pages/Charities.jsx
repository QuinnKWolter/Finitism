import React from 'react';

function Charities() {
  const topCharities = [
    { name: 'Charity A', quality: 90 },
    { name: 'Charity B', quality: 85 },
    { name: 'Charity C', quality: 80 },
  ];

  const charityCategories = [
    {
      category: 'Environmental Charities',
      charities: [
        { name: 'Eco Warriors', quality: 75 },
        { name: 'Green Earth', quality: 80 },
      ],
    },
    {
      category: 'Health Charities',
      charities: [
        { name: 'Health First', quality: 85 },
        { name: 'Wellness Warriors', quality: 90 },
      ],
    },
    {
      category: 'Education Charities',
      charities: [
        { name: 'Learn & Grow', quality: 88 },
        { name: 'Knowledge Seekers', quality: 82 },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Charity Rating System</h1>
      <p className="mb-4">
        Our rating system evaluates charities based on transparency, impact, and efficiency. Metrics are informed by CharityNavigator and CharityWatch.
      </p>

      <h2 className="text-2xl font-bold mb-4">Top Charities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {topCharities.map((charity, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{charity.name}</h3>
              <div className="radial-progress" style={{ "--value": charity.quality }}>{charity.quality}%</div>
            </div>
          </div>
        ))}
      </div>

      {charityCategories.map((category, index) => (
        <div key={index} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {category.category}
          </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.charities.map((charity, idx) => (
                <div key={idx} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">{charity.name}</h3>
                    <div className="radial-progress" style={{ "--value": charity.quality }}>{charity.quality}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Charities; 