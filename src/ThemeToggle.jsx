import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  console.log(isDarkTheme);
  return (
    <>
      <section className="toggle-container">
        <button onClick={toggleDarkTheme} className="dark-toggle">
          {isDarkTheme ? (
            <BsFillSunFill className="toggle-icon" />
          ) : (
            <BsFillMoonFill className="toggle-icon" />
          )}
        </button>
      </section>
    </>
  );
};

export default ThemeToggle;
