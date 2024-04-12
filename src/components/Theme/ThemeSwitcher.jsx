"use client";
import { useContext, useEffect, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";
import { ThemeSwitcherContext } from "./ThemeSwitcherContext";

export default /* use client */ function ThemeSwitcher({ darkClassName }) {
  // Initialize state with a default value, you could use false or true depending on your design choice
  const { dark, toggle } = useContext(ThemeSwitcherContext);
  return (
    <div>
      <button
        onClick={toggle}
        data-testid="themeSwitcherButton"
        className="btn" // Ensure this class is applied
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};
