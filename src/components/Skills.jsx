import React from 'react';
import { FaHtml5, FaCss3, FaSass, FaReact, FaBootstrap, FaGit, FaFigma, FaJs, FaCode } from 'react-icons/fa';
import { SiNodedotjs, SiPostgresql, SiTypescript, SiMongodb } from 'react-icons/si'; // Ensure correct import
import { IoLanguage } from 'react-icons/io5'; // Correct import

const Skills = () => {
  return (
    <div id='skills-section'style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <h2>SKILLS</h2>
      <h3 style={{ textAlign: 'left' }}>USING</h3>
      <div className="grid">
        <div className="icon">
          <FaHtml5 size={36} />
          <p>HTML5</p>
        </div>
        <div className="icon">
          <FaCss3 size={36} />
          <p>CSS3</p>
        </div>
        <div className="icon">
          <FaSass size={36} />
          <p>SASS</p>
        </div>
        <div className="icon">
          <FaReact size={36} />
          <p>React</p>
        </div>
        <div className="icon">
          <FaBootstrap size={36} />
          <p>Bootstrap</p>
        </div>
        <div className="icon">
          <FaGit size={36} />
          <p>Git</p>
        </div>
        <div className="icon">
          <FaFigma size={36} />
          <p>Figma</p>
        </div>
        <div className="icon">
          <FaJs size={36} />
          <p>JavaScript</p>
        </div>
      </div>

      <h3 style={{ textAlign: 'left' }}>LEARNING</h3>
      <div className="grid">
        <div className="icon">
          <SiNodedotjs size={36} />
          <p>Node.js</p>
        </div>
        <div className="icon">
          <SiPostgresql size={36} />
          <p>PostgreSQL</p>
        </div>
        <div className="icon">
          <SiTypescript size={36} />
          <p>TypeScript</p>
        </div>
        <div className="icon">
          <SiMongodb size={36} />
          <p>MongoDB</p>
        </div>
      </div>

      <h3 style={{ textAlign: 'left' }}>OTHER SKILLS</h3>
      <div className="grid">
        <div className="icon">
          <IoLanguage size={36} />
          <p>English</p>
        </div>
        <div className="icon">
          <IoLanguage size={36} />
          <p>Spanish</p>
        </div>
        <div className="icon">
          <FaCode size={36} />
          <p>C++</p>
        </div>
        <div className="icon">
          <FaCode size={36} />
          <p>C</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
