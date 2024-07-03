import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Page2 = () => {
  const [settings, setSettings] = useState({
    "--bg-light": "#FFFFFF",
    "--bg-dark": "#282C34",
    "--txt-light": "#000000",
    "--txt-dark": "rgba(0, 0, 0, 0.632)",
  });

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const themes = [
    {
      "--bg-light": "#FFFFFF",
      "--bg-dark": "#F0F0F0",
      "--txt-light": "#000000",
      "--txt-dark": "rgba(0, 0, 0, 0.632)",
    },
    {
      "--bg-light": "#333333",
      "--bg-dark": "#282C34",
      "--txt-light": "#FFFFFF",
      "--txt-dark": "#CCCCCC",
    },
  ];

  const colors = ["#FF6347", "#32CD32", "#1E90FF", "#FFA500", "#9370DB"];
  const [theme, setTheme] = useState("light");
  const [colora, setColora] = useState(0);

  const changeTheme = (i) => {
    setTheme(i === 0 ? "light" : "dark");
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...themes[i],
    }));
  };

  const changeColor = (i) => {
    setColora(i);
    setSettings((prevSettings) => ({
      ...prevSettings,
      "--txt-light": colors[i],
    }));
  };

  return (
    <div
      style={{
        backgroundColor: settings[theme === "light" ? "--bg-light" : "--bg-dark"],
        color: settings[theme === "light" ? "--txt-light" : "--txt-dark"],
      }}
    >
      <div className="section d-block">
        <h2>THEME</h2>
        <div className="opt">
          <div
            className="opts light"
            onClick={() => changeTheme(0)}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {theme === "light" && (
              <div className="check light">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div
            className="opts dark"
            onClick={() => changeTheme(1)}
            style={{ backgroundColor: "#333333" }}
          >
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block">
        <h2>TEXT COLOR</h2>
        <div className="opt">
          {colors.map((color, index) => (
            <div
              key={index}
              className="opts light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {colora === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
