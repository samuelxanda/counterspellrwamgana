import React from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
  const events = [
    { time: '8:00 AM', title: 'Doors open' },
    { time: '8:45 AM', title: 'Opening ceremony' },
    { time: '9:30 AM', title: 'Breakfast' },
    { time: '10:30 AM', title: 'Start working on your game!' },
    { time: '11:30 AM', title: 'Gamedev workshop 1' },
    { time: '1:30 PM', title: 'Lunch' },
    { time: '2:30 PM', title: 'Activity 1' },
    { time: '4:30 PM', title: 'Lightning talks' },
    { time: '5:30 PM', title: 'Gamedev workshop 2' },
    { time: '7:30 PM', title: 'Dinner Break' },
    { time: '8:30 PM', title: 'Open Hacking Session' },
    { time: '09:00 PM', title: 'Networking & Wrap-Up' },
    { time: '08:00 AM', title: ' Breakfast' },
    { time: '09:00 AM', title: 'Final Hacking Sprint' },
    { time: '10:30 AM', title: 'Game Demos!' },
    { time: '12:00 PM', title: 'Lunch Break' },
    { time: '01:00 PM', title: 'Judging & Deliberation' },
    { time: '02:30 PM ', title: ' Closing Ceremony' },
    { time: '03:30 PM', title: 'Group Photo & Networking' },

  ];

  return (
    <section className="schedule-section">
        <p className="schedule-intro">
          <p>HERE'S A SCHEDULE SO YOU KNOW WHAT TO EXPECT!</p>
       </p>
        <p className="schedule-note">Check out what we have planned for you!</p>


      <div className="schedule-list">
        {events.map((event, index) => (
          <div key={index} className="schedule-item">
            <span className="schedule-title">{event.title}</span>
            <span className="schedule-time">{event.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
