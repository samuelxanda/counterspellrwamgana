import React from 'react';
import '../styles/Schedule12.css';

const Schedule12 = () => {
  const scheduler = [

    {time:'7:00 PM',title:'Award and End Ceremony'},
    {time:'7:00 PM',title:'Award and End Ceremony'},
    {time:'7:00 PM',title:'Award and End Ceremony'},
    {time:'7:00 PM',title:'Award and End Ceremony'},
    {time:'7:00 PM',title:'Award and End Ceremony'},
    {time:'7:00 PM',title:'Award and End Ceremony'}
  ];

  return (
    <section>
    <div className='schedule'>
      <div className='schedule-list1'>
        {scheduler.map((event,index)=>(
          <div key={index} className='schedule-item1'>
            <span className='schedule-title123'>{event.title}</span>
            <span className='schedule-time123'>{event.time}</span>
        </div>
        ))}
        
      </div>

    </div>
      {/* <div className="schedule-list">
        {events.map((event, index) => (
          <div key={index} className="schedule-item">
            <span className="schedule-title">{event.title}</span>
            <span className="schedule-time">{event.time}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Schedule12;
