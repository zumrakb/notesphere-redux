import React from "react";
import Top from "./Top";
import NoteList from "./NoteList";

function App() {
  // const [notes, setNotes] = useState([]); // replaced by redux
  // useEffect(getting, []);
  // function deleteNote(id) {  --- replaced by redux
  //   setNotes((prevNotes) => {
  //     const newnote = prevNotes.filter((noteitem, index) => {
  //       return index !== id;
  //     });
  //     const stringNote = JSON.stringify(newnote);
  //     localStorage.setItem("note", stringNote);
  //     return newnote;
  //   });
  // }
  // function addNote(newnote) {  --- replaced by redux
  //   setNotes((prevNotes) => {
  //     const newNote = [...prevNotes, newnote];
  //     const stringNote = JSON.stringify(newNote);
  //     localStorage.setItem("note", stringNote);
  //     return newNote;
  //   });
  // }

  // function getting() {
  //   const getlist = localStorage.getItem("note");

  //   const getlistparsed =
  //     JSON.parse(getlist) === null ? [] : JSON.parse(getlist);
  //   setNotes(getlistparsed); // -- here basically we will be using addNote reducer
  // }

  return (
    <>
      <Top
      // onAdd={addNote}  --- replaced it by redux
      />
      <NoteList
      // notes={notes} -- replaced it by redux
      // onDelete={deleteNote}  -- replaced it by redux
      />
    </>
  );
}

export default App;
