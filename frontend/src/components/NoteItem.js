import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css';

const NoteItem = (props) => {
    const {note} = props; 
    const navigate = useNavigate();
    const openNote = (note) => {
      // console.log(note);
      navigate(`/note/${note._id}`);
    }
  return (
    <>
        <div className='animate__animated animate__zoomIn animate__faster relative rounded border-2 border-slate-300 hover:border-indigo-800 shadow p-5 pb-10 text-left flex flex-col items-start h-80 bg-white' style={{backgroundImage: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${note.image})`, backgroundSize: 'cover'}}>
            <h5 className='font-semibold text-lg text-indigo-900 w-40'>{note.title}</h5>
            <small className='text-xs text-slate-500'>Tag: {note.tag}</small>
            <p className='font-normal text-sm mt-4 overflow-hidden' style={{display: "-webkit-box", WebkitLineClamp: "9", WebkitBoxOrient: "vertical"}}>{note.description}</p>
            <div className='absolute right-5 top-4 text-xl space-x-3'>
                <i className="fa-solid fa-trash-can text-red-700 cursor-pointer" onClick={()=>{props.deleteNoteModal(note._id)}}></i>
                <i className="fa-regular fa-pen-to-square text-blue-600 cursor-pointer" onClick={()=>{props.updateNote(note)}}></i>
            </div>
            <button className='absolute right-5 bottom-1 text-sm font-semibold text-indigo-800 flex items-center gap-3 hover:text-indigo-600' onClick={()=>openNote(note)}>Continue <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </>
  )
}

export default NoteItem
