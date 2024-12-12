import React from 'react';

function Hobbies() {
  return (
    <div id="hobbies" className="section hobbies-section">
      <div className="image-container centered-image">
        <img src="hobby.png" alt="Hobbies" className="profile-image large-image" />
      </div>
      <div className="content-container left-align">
        {/* Heading Box */}
        <div className="heading-box">
          <h1>Hobbies</h1>
        </div>

        {/* Content Sections */}
        <div className="custom-card">
          <h2>Outdoor</h2>
          <p>
          In outdoor i like walking🚶🏻‍♂️, cycling🚴🏻, basketball🏀, and badminton🏸
          </p>

          <h2>Indoor</h2>
          <p>
            I like playing music, online games, chess, sleeping.
          </p>
          <h2>Having hobbies is a must if you want to have a fulfilling and happy life. Whether you want to practice your interests solo or in a group with other like-minded individuals, you need to do what makes you happy. </h2>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;