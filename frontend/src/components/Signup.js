import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const steps = [];
  for (let i = 1; i <= 10; i++) {
    steps.push(<div className={`bubble x${i}`} key={i}></div>);
  }

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/createuser`;
    const {name, email, password, cpassword} = credentials;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      history('/');
      props.showAlert('Account created successfully', 'success')
    } else {
      props.showAlert('Invalid credentials', 'oopsie')
    }
  }
  return (
    <>
      <div className='mt-20 flex items-center justify-center'>
        <div id="background-wrap" className='fixed -z-10 h-100 w-full left-0'>
          {steps}
        </div>
        <div className="relative w-full md:w-1/3 border border-indigo-600 bg-indigo-600 bg-opacity-20 px-10 pb-20 rounded mx-5">
          <p className='text-slate-800 text-3xl font-bold text-center my-10'>iNotebook</p>
          <form className='flex flex-col w-full' onSubmit={handleSubmit}>
            <input className='rounded border border-slate-300 h-10 px-5 mb-3' type='text' placeholder='Name' id="name" name="name" onChange={onChange} minLength="3" required/>
            <input className='rounded border border-slate-300 h-10 px-5 mb-3' type='text' placeholder='Email' id="email" name="email" onChange={onChange} />
            <input className='rounded border border-slate-300 h-10 px-5 mb-3' type='password' placeholder='Password' id="password" name="password" onChange={onChange} minLength="5" required/>
            <input className='rounded border border-slate-300 h-10 px-5' type='password' placeholder='Confirm Password' id="cpassword" name="cpassword" onChange={onChange} minLength="5" required/>

            <button className='bg-indigo-800 rounded py-2 px-10 text-white mt-14' type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
