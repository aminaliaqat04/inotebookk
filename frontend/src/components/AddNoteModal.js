import React, { useContext, useState } from 'react'
import modalContext from "../context/modals/modalContext";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from '../firebase';

// import FileBase64 from 'react-file-base64';

const AddNoteModal = (props) => {
  const mContext = useContext(modalContext);
    const { newnote, setNewNote, handleClick, toggleAddModal, setToggleAddModal } = mContext;

  const onChange = (e) => {
    setNewNote({ ...newnote, [e.target.name]: e.target.value })
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };

  const addImage = async (e) => {
    // const storage = getStorage(app);

    // const storageRef = ref(storage, `images/${newnote.title}`);
    // const uploadTask = uploadBytesResumable(storageRef, e.target.files[0] );

    // uploadTask.on('state_changed',
    //   (snapshot) => {
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case 'paused':
    //         console.log('Upload is paused');
    //         break;
    //       case 'running':
    //         console.log('Upload is running');
    //         break;
    //     }
    //   }, 
    //   (error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;
    
    //       // ...
    
    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect error.serverResponse
    //         break;
    //     }
    //   }, 
    //   () => {
    //     // Upload completed successfully, now we can get the download URL
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setNewNote({ ...newnote, [e.target.name]: downloadURL })
    //       console.log('File available at', downloadURL);
    //     });
    //   }
    // );

    // console.log(e)
    // // setNewNote({ ...newnote, [e.target.name]: e.target.files[0] })
    // setNewNote({ ...newnote, image: e.base64 })
    // console.log(newnote );
    const file = e.target.files[0];
    const file64 = await convertBase64(file)
    setNewNote({ ...newnote, [e.target.name]: file64 })
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
                      <input type="file" id="image" accept='image/*' name="image" value={newnote.image} onChange={addImage} />
                      {/* <FileBase64
                        id = "image"
                        name="image"
                        multiple={ false }
                        onDone={ addImage } /> */}
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
