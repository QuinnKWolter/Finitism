import React, { useState, useEffect } from 'react';
import birthdayPhoto from '../assets/images/birthday_photo.jpg'; // Import the image

function HeartIcon() {
  const restingBPM = 48;
  const birthDate = new Date('1994-01-24T07:14:00');
  const currentDate = new Date();
  const minutesSinceBirth = (currentDate - birthDate) / (1000 * 60);
  const initialHeartbeats = Math.floor(minutesSinceBirth * restingBPM);

  const totalLifetimeBeats = 1889109440; // Hardcoded total lifetime beats

  const [heartbeats, setHeartbeats] = useState(initialHeartbeats);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeats((prevHeartbeats) => prevHeartbeats + 1);
    }, (1000 * 60) / restingBPM); // Calculate interval for 48 BPM

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const remainingBeats = totalLifetimeBeats - heartbeats;

  return (
    <div className="flex items-center space-x-8">
      <svg
        className="heart-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 29.6"
        width="100px"
        height="100px"
      >
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-8.9,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
      </svg>
      <div className="text-2xl">
        <h2>Resting BPM: {restingBPM}</h2>
        <h2>Heartbeats since birth: {heartbeats.toLocaleString()}</h2>
        <h2>Total Estimated Beats: {totalLifetimeBeats.toLocaleString()}</h2>
        <h2>Remaining Beats: {remainingBeats.toLocaleString()}</h2>        
      </div>
      <img
        src={birthdayPhoto}
        alt="Profile"
        className="rounded-full w-42 h-42"
      />
    </div>
  );
}

export default HeartIcon; 