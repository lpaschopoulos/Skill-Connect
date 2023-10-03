import React from 'react';
import './About.css';

function About() {
  return (
    <div className="browse-skills">
      <h2>A platform where users can offer their skills and others can hire them based on those skills.</h2>
      <div className="bullet-list">
        <ul>
          <li>User profiles: Users can create profiles showcasing their skills and experience.</li>
          <li>Skill listings: Skill providers can list their skills and indicate their availability.</li>
          <li>Job postings: Employers can post job opportunities and specify required skills.</li>
          <li>Skill matching: The platform matches job seekers with suitable job openings based on their skills.</li>
          <li>Communication tools: Built-in messaging or chat functionality for seamless interaction between users.</li>
        </ul>
      </div>
      <div className="process-list">
        <h3>Platform Workflow:</h3>
        <ul>
          <li>User registration and profile creation.</li>
          <li>Skill providers list their skills and availability.</li>
          <li>Employers post job opportunities and specify required skills.</li>
          <li>Skill matching algorithm suggests suitable candidates for the job.</li>
          <li>Users connect and communicate through the platform.</li>
          <li>Successful matches lead to job opportunities and skill utilization.</li>
        </ul>
      </div>
      <p className="solution-text">
        Skill Connect serves as the solution to bridge the gap between skill providers and job opportunities,
        offering access to a wide range of job opportunities relevant to users' skills.
      </p>
    </div>
  );
}

export default About;
