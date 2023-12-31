import React, { useState } from "react";
import "./Dropdown.css";
import colorIcon from "./colorIcon.svg";
const noteTheme = {
  white: {
    backgroundColor: "white",
    color: "rgb(80, 79, 79)",
  },
  "#F1EB90": {
    backgroundColor: "#F1EB90",
    color: "rgb(80, 79, 79)",
  },
  "#6DB9EF": {
    backgroundColor: "#6DB9EF",
    color: "white",
  },
  "#FF8F8F": {
    backgroundColor: "#FF8F8F",
    color: "white",
  },
  purple: {
    backgroundColor: "purple",
    color: "white",
  },
  "#7ED7C1": {
    backgroundColor: "#7ED7C1",
    color: "white",
  },
  "#AF2655": {
    backgroundColor: "#AF2655",
    color: "white",
  },
  beige: {
    backgroundColor: "beige",
    color: "rgb(80, 79, 79)",
  },
  "#7BD3EA": {
    backgroundColor: "#7BD3EA",
    color: "rgb(80, 79, 79)",
  },
  "#8ADAB2": {
    backgroundColor: "#8ADAB2",
    color: "white",
  },
  "#EE7214": {
    backgroundColor: "#EE7214",
    color: "white",
  },
  "#B99470": {
    backgroundColor: "#B99470",
    color: "white",
  },
};
function Dropdown(props) {
  const [showColorOptions, setShowColorOptions] = useState(false);
  const { theme, setNoteTheme, noteID } = props;
  const handleOnClick = (e) => {
    setNoteTheme(noteTheme[e.target.getAttribute("value")]);
    const noteList = JSON.parse(localStorage.getItem("note"));
    noteList[noteID].theme = noteTheme[e.target.getAttribute("value")];
    localStorage.setItem("note", JSON.stringify(noteList));
  };
  return (
    <>
      <div className="dropdown">
        <button
          className="colorChangeIcon"
          style={theme}
          onClick={() => {
            setShowColorOptions((prev) => !prev);
          }}
        >
          <img src={colorIcon} alt="Change Color" />
        </button>
        <ul
          className={`dropdown__items ${
            showColorOptions && "show_dropdown__items"
          }`}
        >
          {Object.keys(noteTheme).map((color, index) => (
            <li
              onClick={handleOnClick}
              key={index}
              value={color}
              style={{
                ...noteTheme[color],
                border: `1px solid ${
                  theme && color === theme.backgroundColor
                    ? "purple"
                    : "rgb(227, 227, 227)"
                }`,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
