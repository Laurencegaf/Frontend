import React from 'react';

function Education() {
  return (
    <div id="education" className="section education-section">
      <div className="image-container centered-image">
        <img src="education.png" alt="Education" className="profile-image large-image" />
      </div>
      <div className="content-container left-align">
        {/* Heading Box */}
        <div className="heading-box">
          <h1>Education</h1>
        </div>

        {/* Content Sections */}
        <div className="custom-card">
          <h2>Pamplona Central School</h2>
          <p>
          I attended my primary education at Pamplona Central School during elementary days. I joined Boy Scout of the Philippines and Drum and Lyre from grade three to grade six, and  graduated on March 29, 2017.

          </p>

          <h2>Pamplona National High School</h2>
          <p>
          I started my secondary education at the Pamplona National High School, and I'm happy to be part of the graduates in 2021.
          </p>

          <h2>Naga College Foundation Inc.</h2>
          <p>
          Currently studying at this Institution, the Naga College Foundation pursuing my programming career. I'm a second-year student now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;