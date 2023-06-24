import React from "react";
import styles from './Note.module.css'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function Note(props) {
  const getCurrentTime = () => {
    const date = new Date();
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hours}:${minutes} ${amPm} ${day} ${month}`;
  };

  const updateText = (text, id) => {
    props.updateText(text, id);
  };

  return (
    <div className={styles.note} style={{ backgroundColor: props.note.color }}>
      <textarea
        className={styles.note_text}
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className={styles.note_footer}>
        <p>{getCurrentTime()}</p>
        <DeleteForeverOutlinedIcon
          className={styles.deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
