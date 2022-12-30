import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import modalContext from "../context/modals/modalContext";
import AddNoteModal from "./AddNoteModal";
import EditNoteModal from "./EditNoteModal";
import DeleteNoteModal from "./DeleteNoteModal";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);

    const mContext = useContext(modalContext);
    const { note, setNote, updateNote, deleteNoteModal, handleUpdateClick, toggleModal, setToggleModal, toggleAddModal, setToggleAddModal, toggleDeleteModal, setToggleDeleteModal, noteDeleteId } = mContext;

    return (
        <>
            <AddNoteModal toggleAddModal={{ toggleAddModal, setToggleAddModal }} showAlert = {props.showAlert} />
            <EditNoteModal toggleModal={{ toggleModal, setToggleModal }} note={{ note, setNote }} handleUpdateClick={handleUpdateClick} />
            <DeleteNoteModal toggleDeleteModal={{ toggleDeleteModal, setToggleDeleteModal }} note={{ note, setNote }} noteDeleteId={noteDeleteId} />

            <div className="grid grid-cols-2 mt-10">
                <h1 className="text-2xl font-semibold my-5">Your Notes</h1>
                <div className="flex justify-end items-center">
                    <button className="bg-indigo-800 text-white rounded hover:bg-indigo-700 h-10 w-80" onClick={() => { setToggleAddModal(!(toggleAddModal)) }}>Add a Note</button>
                </div>
            </div>
            <div className="my-3">
                <p className={`${notes.length === 0 && 'flex justify-center items-center h-96 text-xl font-semibold text-slate-400'}`}>{notes.length === 0 && "No notes to display"}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {notes.map((note) => {
                        return (
                            <NoteItem key={note._id} deleteNoteModal={deleteNoteModal} updateNote={updateNote} note={note} />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;
