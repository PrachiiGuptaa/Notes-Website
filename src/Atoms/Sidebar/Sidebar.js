import React, { useState } from "react";
import styles from './Sidebar.module.css';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      <AddCircleOutlinedIcon 
      style={{ fontSize: "50px" }}
      className={styles.plusIcon} 
      alt="Add"
      onClick={() => setListOpen(!listOpen)} />
      <ul className={`${styles.sidebar_list} ${listOpen ? styles.sidebar_list_active : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className={styles.sidebar_list_item}
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
