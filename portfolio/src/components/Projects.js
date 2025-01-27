import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="./assets/project1.jpg" alt="Project 1" />
          <h3>Project 1: Holiday Hype</h3>
          <p>
            This project is a Hotel Booking Application developed using Java for the Android frontend, where users can browse available hotels, make bookings, and manage reservations. 
            The backend is built with PHP to handle user authentication, hotel details, booking management, and payment processing, with data stored in a MySQL database and accessed through RESTful APIs.
          </p>
        </div>
        <div className="project-card">
          <img src="./assets/project2.jpg" alt="Project 2" />
          <h3>Project 2: Personal Portfolio</h3>
          <p>
            This project is a Portfolio Website developed using HTML and CSS for the structure and styling, featuring sections like "About Me," "Skills," "Projects," and "Contact." 
            It includes responsive design to ensure accessibility across devices. The portfolio is enhanced with React for dynamic content, allowing smooth transitions, interactive features, and seamless updates of project details and contact form submissions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
