import React, { useEffect } from "react";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { makeNotes } from "../redux/reducer/noteReducer";

function NoteList() {
  const dispatch = useDispatch();
  // props -- replaced by redux
  const notes = useSelector((state) => state.noteState.notes); // reading the data from the redux state

  // For fetching the data of notes from local storage and storing in global state (redux)
  useEffect(getting, [dispatch]);

  function getting() {
    const getlist = localStorage.getItem("note"); // getting data from localstorage

    const getlistparsed =
      JSON.parse(getlist) === null ? [] : JSON.parse(getlist); // checking whethere it exist.. if it is not exist then return expty array or if it exist return data
    // setNotes(getlistparsed); // -- here basically we will be using addNote reducer

    dispatch(makeNotes(getlistparsed));
  }

  return (
    <div className="note-container">
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            theme={noteitem.theme}
            // onDelete={props.onDelete} -- replced by redux
          />
        );
      })}
    </div>
  );
}

export default NoteList;
