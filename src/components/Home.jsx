import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from "../Contexts/UserContext"

const Home = () => {
  const navigate = useNavigate()
  const [{currentUser, setCurrentUser}] = useContext(UserContext)
  const submit = (e) => {
    e.preventDefault()
    console.log(currentUser)
    navigate('/course')
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="text-3xl text-black font-bold text-center mb-6">NeuroLingua</div>
      <div className="wrapper rounded-lg shadow-md bg-slate-100 p-8 w-1/4">
        <form onSubmit={(e) => submit(e)} className='flex flex-col'>
          <input type="text" name="fname" placeholder='Enter your Full Name' onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})} className='w-full py-2 px-4 rounded-lg focus:outline-slate-300 placeholder:text-slate-400 text-slate-400 mb-4' />
          <input type="email" name="email" placeholder='Enter your Email ID' onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})} className='w-full py-2 px-4 rounded-lg focus:outline-slate-300 placeholder:text-slate-400 text-slate-400 mb-4' />
          <label className='text-slate-400 mb-2'>Select Course</label>
          <select name="course" onChange={(e) => setCurrentUser({...currentUser, course: e.target.value})} className='mb-4 text-slate-400 py-2 px-4 rounded-lg focus:outline-slate-300'>
            <option value="Zero to Hero">Zero to Hero</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
          <label className='text-slate-400 mb-2'>Select Language</label>
          <select name="lang" onChange={(e) => setCurrentUser({...currentUser, lang: e.target.value})} className='mb-4 text-slate-400 py-2 px-4 rounded-lg focus:outline-slate-300'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japenese">Japenese</option>
            <option value="Italian">Italian</option>
            <option value="Russian">Russian</option>
          </select>
          <button type="submit" className='bg-blue-600 text-white text-center py-2 hover:bg-blue-400 rounded-lg'>Join Course</button>
        </form>
      </div>
    </div>
  )
}

export default Home