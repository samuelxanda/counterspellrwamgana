import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const events = [
    { time: '8:00 AM - 8:30 AM', title: 'Check-in & Welcome' },
    { time: '8:45 AM - 9:00 AM', title: 'Opening Remarks &Team Formation' },
    { time: '9:00 AM - 10:00 AM', title: 'Workshop 1' },
    { time: '10:00 AM - 1:00 PM', title: 'Coding Sprint #1 ' },
    { time: '1:00 PM - 2:00PM ', title: 'Lunch Break' },
    { time: '2:00 PM - 3:00 PM', title: 'WorkShop 2' },
    { time: '3:00 PM - 5:00 PM ', title: 'Coding Sprint #2' },
    { time: '5:00 PM - 6:00 PM', title: 'Final Touches & presentations prep' },
    { time: '6:00 PM -7:00 PM', title: 'Project Presentations' },
    { time: '7:00 PM - 7:30 PM', title: 'Award & Closing Celemony' },
    // { time: '8:30 PM', title: 'Open Hacking Session' },
    // { time: '09:00 PM', title: 'Networking & Wrap-Up' },
    // { time: '08:00 AM', title: ' Breakfast' },
    // { time: '09:00 AM', title: 'Final Hacking Sprint' },
    // { time: '10:30 AM', title: 'Game Demos!' },
    // { time: '12:00 PM', title: 'Lunch Break' },
    // { time: '01:00 PM', title: 'Judging & Deliberation' },
    // { time: '02:30 PM ', title: ' Closing Ceremony' },
    // { time: '03:30 PM', title: 'Group Photo & Networking' },

  ];
  return (

    <section className="schedule-section">

      <p className="schedule-intro">
        <p>Youth Innovators Hub Hackton Schedule (12 Hours)</p>
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
