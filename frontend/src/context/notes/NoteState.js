import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Add
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      }
    });
    // const json = response.json();
    const json = await response.json();
    setNotes(json)
  };

  // Add a Note
  const addNote = async ( title, description, tag, image ) => {
    // API Add
    const url = `${host}/api/notes/addnote`;
    // const data = new FormData();
    // data.append("title", title);
    // data.append("description", description);
    // data.append("tag", tag);
    // data.append("image", image);
    // var object = {};
    // data.forEach(function(value, key){
    //     object[key] = value;
    // });
    // const bodyData = JSON.stringify(object);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag, image }),
    });
    const json = await response.json();
    console.log(json)

    // Client Side Add
    const note = json;
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Delete
    const url = `${host}/api/notes/deleteNote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    setNotes(json)

    // Client Side Delete
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    // console.log(`deleting the note with ${id}`);
  };

  // Edit a Note
  const editNote = async ( id, title, description, tag, image ) => {
    // API Edit
    const url = `${host}/api/notes/updateNote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag, image }),
    });
    await response.json();
    // console.log(json);

    let updatedNote = JSON.parse(JSON.stringify(notes))
    // Client Side Edit
    for (let index = 0; index < updatedNote.length; index++) {
      const element = updatedNote[index];
      if (element._id === id) {
        updatedNote[index].title = title;
        updatedNote[index].description = description;
        updatedNote[index].tag = tag;
        updatedNote[index].image = image;
        break;
      }
    }
    setNotes(updatedNote);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
