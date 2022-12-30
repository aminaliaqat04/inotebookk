import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import noteContext from "../context/notes/noteContext";

const Sidebar = () => {
    const context = useContext(noteContext);
    const { notes } = context;
    const params = useParams();

    const navigate = useNavigate();
    const openNote = (note) => {
        // console.log(note);
        navigate(`/note/${note._id}`);
    }
    return (
        <>
            <div className='m-4 bg-indigo-500 bg-opacity-10 text-base p-8 rounded border border-indigo-800 mt-10 lg:mt-0 text-center h-auto' style={{height: window.screen.width >= 1024 && '80vh'}}>
                <div className='flex flex-col'>
                    <h3 className='text-2xl uppercase font-extrabold mb-5 text-center underline'>Notes</h3>
                    <div className='flex flex-row flex-wrap gap-10 lg:flex-col'>
                    {notes.map((note) => {
                        return (
                            <p className={` ${note._id === params.id ? 'font-bold text-indigo-600' : 'font-normal text-black'} rounded cursor-pointer leading-5`} key={note._id} onClick={() => openNote(note)}>{note.title}</p>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
