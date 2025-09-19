import React from 'react';

function MasterList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Source Issues</h1>
      
      {/* Apathy & Learned Helplessness */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Apathy & Learned Helplessness
        </div>
        <div className="collapse-content">
          <p>Details about apathy and its impact on society.</p>
        </div>
      </div>

      {/* Misinformation & Disinformation */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Misinformation & Disinformation
        </div>
        <div className="collapse-content">
          <p>Details about misinformation and its consequences.</p>
        </div>
      </div>

      {/* Short-Termism vs. Long-Term Sustainability */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Short-Termism vs. Long-Term Sustainability
        </div>
        <div className="collapse-content">
          <p>Details about the conflict between short-term gains and long-term sustainability.</p>
        </div>
      </div>

      {/* Extreme Individualism & Consumer Self-Focus */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Extreme Individualism & Consumer Self-Focus
        </div>
        <div className="collapse-content">
          <p>Details about the impact of extreme individualism and consumer self-focus on society.</p>
        </div>
      </div>

      {/* Distrust in Institutions & Conspiracy Mindsets */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Distrust in Institutions & Conspiracy Mindsets
        </div>
        <div className="collapse-content">
          <p>Details about the growing distrust in institutions and the rise of conspiracy mindsets.</p>
        </div>
      </div>

      {/* Inequality & the Concentration of Power */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Inequality & the Concentration of Power
        </div>
        <div className="collapse-content">
          <p>Details about inequality and the concentration of power in society.</p>
        </div>
      </div>

      {/* Polarization & Tribalism */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Polarization & Tribalism
        </div>
        <div className="collapse-content">
          <p>Details about the effects of polarization and tribalism on social cohesion.</p>
        </div>
      </div>

      {/* Intellectual Rigidity (Lack of Humility) */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Intellectual Rigidity (Lack of Humility)
        </div>
        <div className="collapse-content">
          <p>Details about intellectual rigidity and the importance of humility in discourse.</p>
        </div>
      </div>
    </div>
  );
}

export default MasterList; 