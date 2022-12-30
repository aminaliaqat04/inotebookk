import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import ModalState from "./context/modals/ModalState";
import Alert from "./components/Alert";
import FullNote from "./components/FullNote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  return (
    <>
      <NoteState>
        <ModalState showAlert={showAlert}>
        <BrowserRouter>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={!localStorage.getItem('token')? <Login showAlert={showAlert}/> : <Navigate to="/" />} />
            <Route exact path="/signup" element={!localStorage.getItem('token')? <Signup showAlert={showAlert}/> : <Navigate to="/" />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/note/:id" element={<FullNote />} />
          </Routes>
        </BrowserRouter>
        </ModalState>
      </NoteState>
    </>
  );
}

export default App;
