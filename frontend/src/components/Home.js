import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  // const steps = [];
  // for (let i = 1; i <= 10; i++) {
  //   steps.push(<div className={`bubble x${i}`} key={i}></div>);
  // }
  return (
    <>
      
      <div className="relative">
        {/* <div className='absolute bg-white h-screen w-full z-10 flex items-center text-2xl animate__animated animate__slideInUp animate__faster'><span className="animate__animated animate__slideInRight animate__delay-2s w-1/3 md:w-1/2">iNotebook</span></div>
        <div className='absolute bg-indigo-100 h-screen w-full z-10 flex items-center justify-center text-2xl animate__animated animate__slideInRight animate__faster animate__delay-2s'><img src={require('../assets/writing.gif')} className="animate__animated animate__slideInRight animate__delay-2s w-3/4" alt='Writing'/></div>

        <div className="absolute animate__animated animate__fadeIn animate__delay-3s h-screen w-full z-10 bg-indigo-100"> */}
          <div className='container mx-auto px-4'>
            {/* <div id="background-wrap" className='fixed -z-10 h-100 w-full left-0'>
              {steps}
            </div> */}
            <div className="fixed md:absolute bubbles b-2"></div>
            <div className="fixed md:absolute bubbles b-1"></div>
            <div className="fixed md:absolute bubbles b-3"></div>
            <Notes showAlert={props.showAlert}/>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Home
