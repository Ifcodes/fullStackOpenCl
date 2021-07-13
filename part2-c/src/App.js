import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/errorms";
import Footer from "./components/footer";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState("");
  const [erroMessage, setErroMessage] = useState(null);

  const handleShow = (event) => {
    setShowAll(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changeNote = { ...note, important: !note.important };

    noteService
      .update(id, changeNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
        console.log(response.data);
      })
      .catch((error) => {
        setErroMessage(`Note ${note.content} no longer exist`);
        setTimeout(() => {
          setErroMessage(null);
        }, 5000);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const noteToShow = showAll
    ? notes.filter((note) => note.content.toLowerCase().includes(showAll))
    : notes;

  const hook = () => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  // console.log("render", notes.length, "notes");

  let handleNewNote = (event) => {
    setNewNote(event.target.value);
  };

  const addNotes = (event) => {
    event.preventDefault();

    const addNote = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteService
      .createNew(addNote)
      .then((response) => {
        setNewNote("");
        hook();
      })
      .catch((error) => {
        setErroMessage(
          "Note title should be more than or equal to 6 characters"
        );
        setTimeout(() => {
          setErroMessage(null);
        }, 5000);
      });
  };

  const handledelete = (id) => {
    const noteSel = notes.find((note) => note.id === id);

    noteService.del(id, noteSel).then((response) => {
      console.log(response);
      setNotes(notes.filter((note) => note.id !== id));
    });
  };
  return (
    <div>
      <input types="search" value={showAll} onChange={handleShow} />
      <Notification message={erroMessage} />
      <ul>
        {noteToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            handledelete={() => handledelete(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNotes}>
        <input
          type="text"
          name="addcontact"
          value={newNote}
          onChange={handleNewNote}
        />
        <button type="submit">Add Note</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
