import React from "react";
import { useState } from "react";

import calenderIcon from "./calenderIcon.png";

import deleteIcon from "./deleteIcon.svg";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/reducer/noteReducer";

function Note(props) {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const formatter = new Intl.DateTimeFormat("en", { month: "short" });
  const currentMonth = formatter.format(currentDate);

  const [noteTheme, setNoteTheme] = useState(props.theme);

  function handleClick() {
    // props.onDelete(props.id); -- replaced by redux
    dispatch(deleteNote(props.id));
  }

  function handleOnEdit() {}

  return (
    <div className="note-component" style={noteTheme}>
      <div className="text-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <hr />
      <div className="note-bottom">
        <div className="calender-container">
          <img src={calenderIcon} alt="calender" />
          <span>
            {currentDay} {currentMonth}
          </span>
        </div>

        <div className="note-button">
          <Dropdown
            noteID={props.id}
            theme={noteTheme}
            setNoteTheme={setNoteTheme}
          />
          <button
            onClick={handleClick}
            className="delete-btn"
            style={noteTheme}
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
          <button
            onClick={handleOnEdit}
            className="delete-btn"
            style={noteTheme}
          >
            <img src={deleteIcon} alt="Edit" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
