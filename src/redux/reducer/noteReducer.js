import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const noteReducer = createSlice({
  name: "noteBox",
  initialState,
  reducers: {
    addNote: (state, actions) => {
      state.notes.push(actions.payload);
      const stringNote = JSON.stringify(state.notes); // here we are converting array to string.
      localStorage.setItem("note", stringNote); //  here we are storing the string into the localstorage
    },
    makeNotes: (state, actions) => {
      state.notes = actions.payload;
    },
    deleteNote: (state, actions) => {
      const id = actions.payload;
      state.notes = state.notes.filter((noteitem, index) => {
        return index !== id;
      });
      const stringNote = JSON.stringify(state.notes);
      localStorage.setItem("note", stringNote);
    },
    editNote: () => {},
  },
});

export const { addNote, deleteNote, makeNotes } = noteReducer.actions;

export default noteReducer.reducer;
