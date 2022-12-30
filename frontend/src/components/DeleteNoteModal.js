import React, { useContext } from 'react'
import modalContext from "../context/modals/modalContext";

const DeleteNoteModal = (props) => {
    const mContext = useContext(modalContext);
    const { toggleDeleteModal, setToggleDeleteModal, deleteBtn, noteDeleteId } = mContext;
    
    return (
        <>
            <div className={`${toggleDeleteModal ? "block" : 'hidden'} relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                <div className="mt-3 text-center">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Delete Note</h3>
                                    <div className="mt-2">
                                        <p>Are you sure you want to delete this note?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {deleteBtn(noteDeleteId)}}>Delete</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => { setToggleDeleteModal(!toggleDeleteModal) }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteNoteModal
