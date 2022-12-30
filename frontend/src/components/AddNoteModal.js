import React, { useContext, useState } from 'react'
import modalContext from "../context/modals/modalContext";

const AddNoteModal = (props) => {
  const mContext = useContext(modalContext);
    const { newnote, setNewNote, handleClick, toggleAddModal, setToggleAddModal } = mContext;

  const onChange = (e) => {
    setNewNote({ ...newnote, [e.target.name]: e.target.value })
  }

  const addImage = (e) => {
    setNewNote({ ...newnote, [e.target.name]: e.target.files[0] })
    console.log(newnote );
  }

  return (
    <>

      <div className={`${toggleAddModal ? "block" : 'hidden'} relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                <div className="mt-3 text-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Add a Note</h3>
                  <div className="mt-2">
                    <form className='flex flex-col space-y-3 w-full' encType="multipart/form-data">
                      <input className='rounded border border-slate-300 h-10 px-5' type='text' placeholder='Title name' id="title" name="title" value={newnote.title} onChange={onChange} />
                      <input className='rounded border border-slate-300 h-10 px-5' type='text' placeholder='Tags' id="tag" name="tag" value={newnote.tag} onChange={onChange} />
                      <textarea className='rounded resize-none border border-slate-300 px-5 py-2' placeholder='Start typing...' rows="15" id="description" name="description" value={newnote.description} onChange={onChange}></textarea>
                      <input type="file" id="image" name="image" onChange={addImage} />
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" disabled={newnote.title.length < 3 || newnote.description.length < 5} className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-800 disabled:bg-gray-500 focus:outline-none focus:ring-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClick}>Add Note</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => { setToggleAddModal(!toggleAddModal) }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNoteModal
