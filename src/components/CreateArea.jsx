import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/reducer/noteReducer";
function CreateArea() {
// props -- replaced by redux
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [showTitleInput, setShowTitleInput] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title !== "" || note.content !== "") {
      // props.onAdd(note); -- replaced by redux
      dispatch(addNote(note));
    }
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleOnClickingTextarea() {
    setShowTitleInput(true);
  }

  return (
    <form className="input-section">
      {showTitleInput ? (
        <input
          onChange={handleOnChange}
          id="input"
          type="text"
          className="takenote"
          placeholder="Title"
          name="title"
          value={note.title}
          style={{ marginTop: "70px" }}
        />
      ) : (
        <h1 className="wishes">GOOD MORNING, ZÜMRA!</h1>
      )}

      <textarea
        onChange={handleOnChange}
        onClick={handleOnClickingTextarea}
        className="textarea"
        name="content"
        id="textarea"
        cols={30}
        rows={showTitleInput ? 5 : 1}
        placeholder="Take a note..."
        value={note.content}
      ></textarea>

      {showTitleInput && (
        <button onClick={submitNote} className="submit-btn" type="submit">
          Submit
        </button>
      )}
    </form>
  );
}

export default CreateArea;
