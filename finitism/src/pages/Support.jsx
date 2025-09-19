import React from 'react';
import { MdVolunteerActivism, MdForum, MdMenuBook, MdAccountTree, MdSecurity } from 'react-icons/md';
import { FaTrowelBricks } from 'react-icons/fa6';

function GetInvolvedSupport() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Get Involved & Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Donate Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <MdVolunteerActivism className="text-4xl mb-2 mx-auto" />
            <p>Support our cause by donating to charities that align with our mission.</p>
            <button className="btn btn-primary">Give</button>
          </div>
        </div>

        {/* Volunteer Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <FaTrowelBricks className="text-4xl mb-2 mx-auto" />
            <p>Contribute your time and skills to help us make a difference.</p>
            <button className="btn btn-secondary">Volunteer</button>
          </div>
        </div>

        {/* Communicate Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <MdForum className="text-4xl mb-2 mx-auto" />
            <p>Engage with others and spread the word about our initiatives.</p>
            <button className="btn btn-accent">Communicate</button>
          </div>
        </div>

        {/* Learn Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <MdMenuBook className="text-4xl mb-2 mx-auto" />
            <p>Discover what matters to you and how you can contribute.</p>
            <button className="btn btn-info">Learn</button>
          </div>
        </div>
      </div>

      {/* If You've Done Everything Else Section */}
      <div className="mt-8 flex justify-end">
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-128">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium text-gray-500">
            If you've done everything else...
          </div>
          <div className="collapse-content">
            <p>If you've already donated, volunteered, communicated, and learned, consider supporting our platform directly.</p>
            
            {/* Platform Projects Donation */}
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                <MdAccountTree className="inline-block mr-2" />
                Donate to Platform Projects
              </div>
              <div className="collapse-content">
                <p>100% of your donation will go towards supporting our platform's projects and initiatives.</p>
                <button className="btn btn-success mt-2">Donate to Projects</button>
              </div>
            </div>

            {/* Personal Support Donation */}
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                <MdSecurity className="inline-block mr-2" />
                Trust the Site Creator
              </div>
              <div className="collapse-content">
                <p>Consider donating to support the personal efforts of the site creator.</p>
                <button className="btn btn-warning mt-2">Support Creator</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInvolvedSupport; 