import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      
      <div className="faq-cards">
        <div className="faq-card">
          <h2 className="faq-card-title">Do I need to be good at coding to join?</h2>
          <p className="faq-card-content">
          No experience is required! *Counterspell is for beginners and experienced participants alike. Whether you're a coder, artist, or musician, there will be workshops, mentors, and resources to help you learn and create.
          </p>
        </div>
        
        <div className="faq-card">
          <h2 className="faq-card-title">How much does it cost?</h2>
          <p className="faq-card-content">
          It's free to join Counterspell Rwamagana!  We’ll provide meals, snacks, drinks, swag, and prizes for everyone. Everyone is welcome to have fun and create!
          </p>
        </div>
        
        <div className="faq-card">
          <h2 className="faq-card-title">Who can join?</h2>
          <p className="faq-card-content">
          Counterspell Rwamagana is for all high school students! Whether you’re a beginner or an expert, if you love coding games and want to learn, we’d be happy to have you join us!
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What if my parents are worried?</h2>
          <p className="faq-card-content">
          We understand that parents may have concerns. That’s why we will provide a parent guide to all participants before the event starts. 
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What should I bring?</h2>
          <p className="faq-card-content">
          Please bring your laptop, charger, and any other tools you think you'll need. If you have a favorite snack or drink, feel free to bring that too!
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What will we do at Counterspell?</h2>
          <p className="faq-card-content">
          At Counterspell, we’ll code video games and learn new skills together! You'll have the chance to work on exciting projects, collaborate with others, and share your ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

// import React, { useState } from 'react';
// import '../styles/FAQ.css';

// const FAQAccordion = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const faqs = [
//         { question: "Do I need any coding experience to join?", answer: "No experience is needed! This hackathon is beginner-friendly, with workshops and mentors ready to help you learn." },
//         { question: "Who can join the Youth Innovators Hub Hackathon?", answer: "All high school students interested in tech are welcome! Whether you’re totally new to coding or curious about it, this event is for you." },
//         { question: "Can I team up with friends?", answer: "Definitely! You can join with friends, or we can help you find a team. Working with others makes learning more fun!" },
//         { question: "What should I bring?", answer: "Please bring a laptop, as you’ll need it for the projects and workshops. If you don’t have one, reach out to us in advance, and we’ll try to assist." },
//         { question: "Is there a registration fee?", answer: "No, this event is completely free for all participants." },
//         { question: "Will there be Wi-Fi available?", answer: "Yes, free Wi-Fi will be provided to all participants for the entire event." },
//         { question: "Will food and drinks be provided?", answer: "Yes, meals and snacks will be provided throughout the event to keep you energized." },
//         { question: "Will there be mentors available to help?", answer: "Absolutely! Mentors and event staff will be available to support you with coding questions, project guidance, and more." },
//         { question: "What kind of projects can we work on?", answer: "We encourage projects that solve real-world challenges, but you’re welcome to work on any creative tech idea that inspires you." },
//         { question: "What’s the structure of the event?", answer: "The event will include workshops, hands-on coding sessions, team project time, and breaks. We’ll share a detailed schedule with you closer to the event." },
//         { question: "Do I need to prepare anything before the event?", answer: "No preparation is required! Just come with an open mind and your laptop." },
//         { question: "Are there prizes for participating?", answer: "Yes! We have exciting prizes, certificates, and recognition for creative solutions, teamwork, and innovation." },
//         { question: "How large can teams be?", answer: "Teams can be up to 4 people, but you can also work solo if you prefer." },
//         { question: "How do I register?", answer: "Simply visit our website, click the “Register Now” button, and fill out the form. You’ll get a confirmation email with all the details." },
//         { question: "Will there be workshops for beginners?", answer: "Yes! We’ll have beginner-friendly workshops designed to teach basic coding concepts, as well as advanced topics for those with experience." }
//     ];

//     const toggleFAQ = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className="faq-accordion">
//             <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>
//             {faqs.map((faq, index) => (
//                 <div key={index} className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(index)}>
//                         <h3>{faq.question}</h3>
//                         <span>{activeIndex === index ? '-' : '+'}</span>
//                     </div>
//                     {activeIndex === index && (
//                         <div className="faq-answer">
//                             <p>{faq.answer}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FAQAccordion;
