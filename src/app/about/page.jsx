import React from "react";
import PropTypes from "prop-types";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./about.css";
import SocialWidget from "@/components/Widget/SocialWidget";
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

const socialLinks = [
  {
    text: "Follow me on Twitter",
    url: "https://twitter.com/joe_mabaya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
  },
  {
    text: "Follow me on LinkedIn",
    url: "https://www.linkedin.com/in/joemabaya/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    text: "Follow me on GitHub",
    url: "https://github.com/mabayajoe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    text: "Email me",
    url: "mailto:whoami@example.com",
    logo: "https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png",
  },
];

// export default function About() {
//   //Return HTML elements for About page
//   return (
//     <div className="body">
//       <div className="navebar">
//         <Navebar className="Navebar" />
//       </div>

//       <div className="footerBox">
//         <Footer className="Footer" links={links} />
//       </div>
//     </div>
//   );
// }
export default function About() {
  //Return HTML elements for About page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="aboutBody">
        <div className="aboutDescription">
          <h1 className="h1">
            I’m Joe. I live in Utah, a hidden gem with all the beautfiul landscapes and fun outdoors besides the ocean.
          </h1>
          <br></br>
          <p>
            I grew up in the Democratic republic of Congo, a country in central Africa. I moved to the United States in
            2019 and I have been living in Utah since then.
          </p>
          <br></br>
          <p>
            From the tropical climat to the cold weather, I have been able to adapt to the new environment and I am
            enjoying the new experience. The four seasons are amazing and I love the snow in the winter and now picked a
            new hobby, snowboarding.
          </p>
          <br></br>
          <p>
            {" "}
            Currently getting my Bachelor's degree in CyberSecurity and a minor in Software development at Ensign
            college.
          </p>
          <br></br>
          <p>
            {" "}
            I am always looking for new opportunities to learn and grow. I am currently working on a few projects and I
            am always looking for new opportunities to learn and grow.
          </p>
          <br></br>
          <br></br>
        </div>

        <div className="aboutColumn">
          <div className="imageStyle">
            <img src="snowJoe.png" />
          </div>

          <SocialWidget links={socialLinks} />
          {/* <div className="links">Link 1</div>
          <div className="links">Link 2</div>
          <div className="links">Link 3</div>
          <div className="links">Link 4</div> */}
        </div>
      </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
