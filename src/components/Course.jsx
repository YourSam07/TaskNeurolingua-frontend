import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import vid from "../Assets/demo_vid.mp4"

const Course = () => {
  const navigate = useNavigate()
  const [{ currentUser }] = useContext(UserContext)
  const earn = () => {
    navigate('/certificate')
  }
  return (
    <div className='min-h-screen p-8'>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl mb-6">Welcome, {currentUser.name} to <span className='font-bold'>{currentUser.lang} Course - {currentUser.course}!</span></p>
        <video src={vid} controls className='rounded-md shadow-lg mb-6'></video>
      </div>
      <div className="buttonWrapper">
        <button className='float-right mr-64 bg-blue-600 items-end text-white text-center py-2 px-4 hover:bg-blue-400 rounded-lg' onClick={() => earn()}>Earn Certificate</button>
      </div>
    </div>


  )
}

export default Course