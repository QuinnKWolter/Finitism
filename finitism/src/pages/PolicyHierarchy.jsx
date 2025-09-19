import React from 'react';

function PolicyHierarchy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Policy Hierarchy</h1>
      
      {/* Sustainability & Environment */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Sustainability & Environment
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Small Consumer Decisions</h2>
                <p>Details about how small consumer choices can impact the environment.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Local Policy Changes</h2>
                <p>Information on local policy initiatives for environmental sustainability.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Global Activism</h2>
                <p>Details on global activism efforts for environmental protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare & Basic Services */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Healthcare & Basic Services
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Healthcare Denial Scams</h2>
                <p>Exploring issues with healthcare denial and potential solutions.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Public Options</h2>
                <p>Discussion on potential public options for healthcare services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Systems & Animal Welfare */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Food Systems & Animal Welfare
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Ethical Food Choices</h2>
                <p>How paying slightly more can lead to ethical food improvements.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Meatless Mondays</h2>
                <p>Promoting Meatless Mondays for better animal welfare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Labor & Worker Rights */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Labor & Worker Rights
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Reinforcing Unions</h2>
                <p>Details on the importance of reinforcing unions for worker rights.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Living-Wage Initiatives</h2>
                <p>Information on initiatives to promote living wages.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Fair-Trade Certifications</h2>
                <p>Exploring the role of fair-trade certifications in labor rights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Rights & Right-to-Repair */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Digital Rights & Right-to-Repair
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Fighting Enshittification</h2>
                <p>Efforts to combat enshittification in digital products.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Subscription-Based Hardware</h2>
                <p>Challenges and solutions for subscription-based hardware models.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voting & Campaign Finance Reforms */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Voting & Campaign Finance Reforms
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Minimizing Corporate Influence</h2>
                <p>Strategies to reduce corporate influence in politics.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Dark Money</h2>
                <p>Addressing the issue of dark money in campaign finance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Localizing Action */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Localizing Action
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Community-Level Co-Ops</h2>
                <p>How community-level co-ops can make a real impact.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Land Trusts</h2>
                <p>The role of land trusts in localizing action.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Credit Unions</h2>
                <p>How credit unions contribute to community empowerment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyHierarchy; 