"use client";

import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./projects.css";
import logo from "./projectPic.png";
import ThemeSwitcher from "@/components/Theme/ThemeSwitcher";
import { ThemeSwitcherProvider, useTheme } from "@/components/Theme/ThemeSwitcherContext";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

function ProjectCard({ logos, name, content, link }) {
  return (
    <div className="project-card">
      <img src={logos} alt={`${name} Logo`} className="project-card-logo" />
      <h2>{name}</h2>
      <p>{content}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <img src="./link.svg" alt="" /> View Project
      </a>
    </div>
  );
}

export default function Projects() {
  const { dark } = useTheme();

  return (
    <ThemeSwitcherProvider>
      <div className={`body ${dark ? "darkmode" : ""}`}>
        <div className="navebar">
          <Navebar className="Navebar" />
        </div>
        <div className="projectBody">
          <div>Testing!!!</div>
          <ThemeSwitcher darkClassName="darkmode" />
          <h1 className="h1">Things I’ve made trying to put my dent in the universe.</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi..
          </p>
          <br />
        </div>

        <div className="project-cards">
          <div className="project-cards-row">
            <ProjectCard
              name="Calculator"
              logos={"./projectPic.png"}
              content={
                "Developed a user-friendly calculator using Python's Tkinter library, Implemented arithmetic operations, exponentiation, and error handling, Resulted in a 15% decrease in user errors.."
              }
              link={"https://stage.company-corp.com/platform"}
            />
            <ProjectCard
              name="Real Estate App"
              app
              logos={"./Ensign.png"}
              content={"Description of Project 2."}
              link={"https://example.com/project2"}
            />
            <ProjectCard
              name="Utah french choir App"
              logos={"./Ensign.png"}
              content={"Description of Project 3."}
              link={"https://example.com/project3"}
            />
          </div>

          <div className="project-cards-row">
            <ProjectCard
              name="Retail store App"
              logos={"./Ensign.png"}
              content={"Description of Project 4."}
              link={"https://example.com/project4"}
            />
            <ProjectCard
              name="Customer care chatBot"
              logos={"./Ensign.png"}
              content={
                "I developed and deployed a chatbot utilizing OpenAI's GPT-3.5 API, effectively decreasing query resolution time by 30% through adept error handling and context tracking. This project not only highlighted my problem-solving abilities but also significantly enhanced the user experience."
              }
              link={"https://example.com/project5"}
            />
            <ProjectCard
              name="Real-Time Vehicle Detection"
              logos={"./Ensign.png"}
              content={"Description of Project 6."}
              link={"https://example.com/project6"}
            />
          </div>
        </div>

        <div className="footerBox">
          <Footer className="Footer" links={links} />
        </div>
      </div>
    </ThemeSwitcherProvider>
  );
}
