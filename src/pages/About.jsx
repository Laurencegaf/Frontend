import React from 'react';

function About() {
  return (
    <div id="about" className="section about-section">
      <div className="image-container centered-image">
        <img src="about.png" alt="About me" className="profile-image large-image" />
      </div>
      <div className="content-container left-align">
        {/* Heading Box */}
        <div className="heading-box">
          <h1>About Me</h1>
        </div>

        {/* Content Sections */}
        <div className="custom-card">
          <h2>Introduction</h2>
          <p>
            Hi, I’m Laurence an Information System student with a passion for coding, My journey into tech began with a simple C++ program, and from there, I’ve expanded into backend development and SQL, always seeking projects that challenge me to grow.
          </p>

          <h2>My Mantra</h2>
          <p>
            My mantra is: "I embrace curiosity as my guide. Each question opens a door, and every discovery enriches my journey."
          </p>

          <h2>Future Goals</h2>
          <p>
          Master Backend Development Become proficient in backend development technologies and frameworks (e.g., Node.js, Python, Ruby on Rails) within the next four years.
          </p>

          <h2>Fun Facts</h2>
          <p>
            The First Computer Bug: The term "bug" in computing dates back to 1947 when computer scientist Grace Hopper and her team found a moth causing a malfunction in the Harvard Mark II computer. They taped the moth in their logbook and noted it as the "first actual case of bug being found."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;