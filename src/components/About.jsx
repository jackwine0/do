import React from 'react';

const About = () => {
  return (
    <div id="about-section" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}> {/* Apply margin for spacing */}
      <h2>ABOUT ME</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam recusandae quae adipisci. Recusandae esse qui, sint ipsam delectus in possimus repudiandae, est aliquid debitis accusamus explicabo nulla, tempore consequuntur eius.</p>
      <div className="expertise-grid">
        <div className="expertise-item">
          <h4>Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam.</p>
        </div>
        <div className="expertise-item">
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam.</p>
        </div>
        <div className="expertise-item">
          <h4>Maintenance</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
