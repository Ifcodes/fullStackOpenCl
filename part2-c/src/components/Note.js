import React from "react";
const Note = ({ note, toggleImportance, handledelete }) => {
  const label = note.important ? "Make not Important" : "Make Important";
  return (
    <div>
      <li>
        {note.content}
        <button onClick={toggleImportance} style={{ margin: "1rem" }}>
          {label}
        </button>
        <button onClick={handledelete}>Delete</button>
      </li>
    </div>
  );
};

export default Note;
