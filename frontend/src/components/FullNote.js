import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import noteContext from "../context/notes/noteContext";
import modalContext from "../context/modals/modalContext";
import DeleteNoteModal from './DeleteNoteModal';
import EditNoteModal from './EditNoteModal';
import Sidebar from './Sidebar';

const FullNote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const mContext = useContext(modalContext);
  const { updateNote, deleteNoteModal } = mContext;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <>

      <EditNoteModal />
      <DeleteNoteModal />

      <div className='container mx-auto px-4 py-10'>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className='col-span-1 md:col-span-3'>
            {notes.map((note) => {
              if (note._id === params.id)
                return (
                  <>
                    <div className='grid grid-cols-2'>
                      <div className='flex gap-5 items-center mb-8 font-bold text-indigo-800'>
                        <i className='fa-solid fa-chevron-left cursor-pointer text-xl' onClick={() => { navigate('/') }}></i>
                        <h1 className='text-4xl'>{note.title}</h1>
                      </div>
                      <div className='text-right space-x-5 mr-5 text-2xl'>
                        <i className="fa-solid fa-trash-can text-red-700 cursor-pointer" onClick={() => { deleteNoteModal(note._id) }}></i>
                        <i className="fa-regular fa-pen-to-square text-blue-600 cursor-pointer" onClick={() => { updateNote(note) }}></i>
                      </div>
                    </div>
                    <div>
                      {note.image && <div>
                        <img src={note.image} className=" object-cover w-full h-96 rounded-lg shadow-xl border-2 border-indigo-300" alt={`${note.title}`} />
                      </div>}
                    </div>
                    <p className='my-5'>{note.description}</p>
                    <small>Tags: {note.tag}</small>
                  </>
                );
              return <></>;
            })}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default FullNote
