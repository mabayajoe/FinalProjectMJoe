import "./Introduction.css";
import React from "react";
//import { FaLinkedin, FaXing, FaRegShareSquare } from 'react-icons/fa'; // Assuming you're using React Icons for the icons

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src="profileJoe.png" alt="profile" clasName="pofilepic" />
      <h1>Software Engineer, Entrepreneur and World Citizen</h1>
      <p>
        I am deeply passionate about technology, constantly navigating the intricate landscapes of software engineering
        and cybersecurity. My journey is fueled by an insatiable thirst for knowledge and an unwavering commitment to
        incorporating innovative approaches into my repertoire. Driven by curiosity, passion, and a relentless pursuit
        of excellence, I thrive on the ever-evolving challenges of the tech universe. Outside of this digital realm, you
        will find me on the soccer field, honing my skills, or delving into the pickleBall. Do not hesitate to connect
        with me through my social media channels.{""}
        <br />
        {""}I'm always eager to engage in discussions about technology and beyond.
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="/share" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default ProfileSection;
