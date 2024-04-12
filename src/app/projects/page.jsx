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
              content={"Creating technology to empower civilians to explore space on their own terms."}
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
              name="Project 3"
              logos={"./projectPic3.png"}
              content={"Description of Project 3."}
              link={"https://example.com/project3"}
            />
          </div>

          <div className="project-cards-row">
            <ProjectCard
              name="Project 4"
              logos={"./projectPic4.png"}
              content={"Description of Project 4."}
              link={"https://example.com/project4"}
            />
            <ProjectCard
              name="Project 5"
              logos={"./projectPic5.png"}
              content={"Description of Project 5."}
              link={"https://example.com/project5"}
            />
            <ProjectCard
              name="Project 6"
              logos={"./projectPic6.png"}
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
