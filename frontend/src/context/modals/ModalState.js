import React, { useContext, useState } from 'react'
import ModalContext from "./modalContext";
import NoteContext from "../notes/noteContext";

const ModalState = (props) => {
    const {addNote, editNote, deleteNote} = useContext(NoteContext);
    const [newnote, setNewNote] = useState({ title: "", description: "", tag: "", image: ""});
    const [note, setNote] = useState({id: "", etitle: "", edescripition: "", etag: "", eimage: ""})
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleAddModal, setToggleAddModal] = useState(false);
    const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
    const [noteDeleteId, setNoteDeleteId] = useState("");

    const updateNote = (currentNote) => {
        setToggleModal(!(toggleModal))
        setNote({   id: currentNote._id,
                    etitle: currentNote.title,
                    edescription: currentNote.description,
                    etag: currentNote.tag,
                    eimage: currentNote.image,
        });
    }

    const deleteNoteModal = (id) => {
        setToggleDeleteModal(!(toggleDeleteModal))
        setNoteDeleteId(id);
        // console.log(noteDeleteId);
    }
    
    const deleteBtn = (noteDeleteId) => {
      deleteNote(noteDeleteId);
      props.showAlert("Note has been deleted", "success");
      setToggleDeleteModal(!(toggleDeleteModal));
    }

    const handleUpdateClick = (note) => {
        // console.log(note);
        editNote(note.id, note.etitle, note.edescription, note.etag, note.eimage);
        props.showAlert("Note has been updated","success");
        setToggleModal(!toggleModal);
    }

    const handleClick = (e) => {
      e.preventDefault();
      addNote(newnote.title, newnote.description, newnote.tag, newnote.image);
      props.showAlert("Note has been added", "success");
      setToggleAddModal(!(toggleAddModal));
      setNewNote({ title: "", description: "", tag: "", image: ""});
    }
  return (
    <ModalContext.Provider value={{ newnote, setNewNote, note, setNote, updateNote, deleteBtn, deleteNoteModal, handleClick, handleUpdateClick, toggleModal, setToggleModal, toggleAddModal, setToggleAddModal, toggleDeleteModal, setToggleDeleteModal, noteDeleteId }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalState
