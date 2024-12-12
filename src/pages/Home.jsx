import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'; // Import Button and Card from react-bootstrap
import '../styles/Home.css'; // Ensure you have your custom styles here for additional styling.

function Home() {
  const [showMore, setShowMore] = useState(false); // State to control whether the extra content is shown

  const toggleContent = () => {
    setShowMore(!showMore); // Toggle the state when the button is clicked
  };

  return (
    <div id="home">
      <section className="section">
        <div className="left-side">
          <div className="header-text">
            <h2>Welcome to my Personal Website</h2>
            <p>A Frontend Project</p>
            <p>Laurence Jay San Juan</p>
            <p>College of Computer Studies</p>
          </div>
        </div>
        <div className="right-side">
          <Card style={{ width: '100%', maxWidth: '500px' }} className="custom-card">
            <Card.Body>
              {/* Curved Box for Heading */}
              <div className="heading-box">
                <Card.Title>Who is this guy?</Card.Title>
              </div>

              {/* Profile Image */}
              <div className="profile-img-container">
                <img src="profile.png" alt="Profile" className="profile-image" />
              </div>

              <Card.Text>
                {showMore && (
                  <>
                    <p>Hi! I'm Laurence, an Information System student passionate about technology.</p>
                   
                    <p>I specialize in C++ and SQL, and I'm currently immersed in an exciting backend project that keeps me innovating and learning.</p>
                    
                    <p>What drives me? It’s all about dedication, creativity, and constant growth. I thrive on solving complex challenges, and always push myself to reach new heights.</p>
                    
                    <p>If you're passionate about tech, feel free to reach out. Let's connect and create something amazing together!</p>
                  </>
                )}
              </Card.Text>
              {/* Button to Toggle Content */}
              <Button variant="success" onClick={toggleContent} className="see-more-button">
                {showMore ? 'Show Less' : 'See More'}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;