import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      {/* Main Title */}
      <h1 className="about-title">About</h1>
      <br />

      {/* Introduction Section */}
      <section className="about-section intro-section">
        <h2 className="section-title">CareerConnect</h2>
        <p className="section-content">
          CareerConnect is an innovative web application designed to bridge the gap between job seekers and employers.
          Created by Anne Muriuki, Abdimalik Abdullahi, and David Parsley, CareerConnect aims to streamline the job
          search process and empower employers to manage their job listings efficiently.
        </p>
      </section>
      <br />

      {/* Purpose Section */}
      <section className="about-section purpose-section">
        <h2 className="section-title">Our Purpose</h2>
        <p className="section-content">
          In today's fast-paced and competitive job market, job seekers often struggle to find opportunities that align
          with their skills, experience, and career goals. Simultaneously, employers face challenges in reaching and
          engaging the right talent. CareerConnect solves these problems by offering a simple, intuitive platform that
          allows job seekers to easily browse and apply for relevant job opportunities, while employers can easily post,
          update, and manage job listings.
        </p>
      </section>
      <br />

      {/* Solution Section */}
      <section className="about-section solution-section">
        <h2 className="section-title">Our Solution</h2>
        <p className="section-content">
          CareerConnect provides a unified platform where job seekers and employers can connect, interact, and create
          value. Job seekers can search for, filter, and view job listings based on their preferences, while employers
          can create and manage job posts to find the best candidates for their openings. By providing a seamless user
          experience for both sides, CareerConnect fosters a space for mutual benefit in the job market.
        </p>
      </section>
      <br />

      {/* Future Plans Section */}
      <section className="about-section future-section">
        <h2 className="section-title">Future Plans</h2>
        <p className="section-content">
          Looking ahead, we plan to enhance the user experience by creating separate interfaces for job seekers and
          employers. Currently, both user types share the same page, but as we continue to grow, we aim to provide
          more tailored, user-specific interfaces for each group.
        </p>
      </section>
      <br />

      {/* Team Section */}
      <section className="about-section team-section">
        <h2 className="section-title">The Team</h2>
        <ul className="team-list">
          <li className="team-member">
            <strong className="member-name">Anne Muriuki</strong>: A dedicated web developer focused on delivering a seamless user experience.
          </li>
          <li className="team-member">
            <strong className="member-name">Abdimalik Abdullahi</strong>: A driven team member committed to building functional and scalable solutions.
          </li>
          <li className="team-member">
            <strong className="member-name">David Parsley</strong>: A collaborator with a keen eye for clean, responsive design and user-centric development.
          </li>
        </ul>
      </section>
      <br />
    </div>
  );
}

