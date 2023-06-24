// import React from 'react'
// import Note from '../../Atoms/Note/Note'

// function NotesPage() {
//   return (
//     <div>
//       This is NotesPage.
//       <Note/>
//     </div>
//   )
// }

// export default NotesPage

import React, { useEffect, useState } from "react";
import NoteContainer from "../../Atoms/NoteContainer/NoteContainer";
import Sidebar from "../../Atoms/Sidebar/Sidebar";
import styles from './NotesPage.module.css';

function NotesPage() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.wrapper}>
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default NotesPage;
