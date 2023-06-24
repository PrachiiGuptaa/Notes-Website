import React from "react";
import styles from './NoteContainer.module.css';
import Note from "../Note/Note";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);
  const hasNotes = notes?.length > 0;

  return (
    <div className={`${styles.note_container} ${hasNotes ? "has-notes" : "no-notes"}`}>
      <h2>Notes</h2>
      <div className={styles.note_container_notes}>
        {hasNotes ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>Add Notes</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
