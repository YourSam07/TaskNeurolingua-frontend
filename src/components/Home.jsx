import React, { createRef, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../Contexts/UserContext"
import PDF from "react-to-pdf"
import sign from "../Assets/sign1.png"
import sign2 from "../Assets/sign2.png"

const ref = createRef()
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10.416, 6.25]
}

const Home = () => {
  const ref = useRef()
  const navigate = useNavigate()
  const [{ currentUser, setCurrentUser }] = useContext(UserContext)
  const submit = (e) => {
    e.preventDefault()
    console.log(currentUser)
    navigate('/certificate')
  }

  // const first = (toPdf) => {  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="text-3xl text-black font-bold text-center mb-6">NeuroLingua</div>
      <div className="wrapper rounded-lg shadow-md bg-slate-100 p-8 w-1/4">
        <form onSubmit={(e) => submit(e)} className='flex flex-col'>
          <input type="text" name="fname" placeholder='Enter your Full Name' onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })} className='w-full py-2 px-4 rounded-lg focus:outline-slate-300 placeholder:text-slate-400 text-slate-400 mb-4' />
          <input type="email" name="email" placeholder='Enter your Email ID' onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} className='w-full py-2 px-4 rounded-lg focus:outline-slate-300 placeholder:text-slate-400 text-slate-400 mb-4' />
          <label className='text-slate-400 mb-2'>Select Course</label>
          <select name="course" onChange={(e) => setCurrentUser({ ...currentUser, course: e.target.value })} className='mb-4 text-slate-400 py-2 px-4 rounded-lg focus:outline-slate-300'>
            <option value="">Courses</option>
            <option value="Zero to Hero">Zero to Hero</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
          <label className='text-slate-400 mb-2'>Select Language</label>
          <select name="lang" onChange={(e) => setCurrentUser({ ...currentUser, lang: e.target.value })} className='mb-4 text-slate-400 py-2 px-4 rounded-lg focus:outline-slate-300'>
            <option value="">Languages</option>
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
          <button type="submit" className='bg-blue-600 text-white text-center py-2 hover:bg-blue-400 rounded-lg'>Download</button>
        </form>
      </div>

      <div className="certificate mb-8 hidden" ref={ref}>
        <div className="container shadow-xl bg-orange-500 w-[1000px] h-[600px] p-1">
          <div className="innerBorder1 bg-white w-full h-full p-1">
            <div className="innerBorder2  bg-orange-500 w-full h-full p-8">
              <div className="innerBorder3 bg-white w-full h-full p-2">
                <div className="innerBody4 border-2 border-dashed border-orange-500 w-full h-full">
                  <div className="mainBody">
                    <div className="head text-4xl font-bold text-orange-400 text-center my-8">
                      NeuroLingua Course Completion Certificate
                    </div>
                    <div className="para">
                      <div className="text-xl italic text-black px-20 pt-12">This is to certify <span className='text-2xl font-bold underline not-italic'>{currentUser.name}</span> for the successful completion of the course</div>
                      <div className='px-20 text-3xl font-bold text-center py-8'>"{currentUser.lang} - {currentUser.course}"</div>
                    </div>
                    <div className="signs flex justify-between items-center mt-20">
                      <div className="left flex-1 flex-col px-8">
                        <div className="img">
                          <img src={sign} alt="" className="h-[75px] w-[200px]" />
                        </div>
                        <div className="line h-[2px] w-1/3 mt-2 bg-black"></div>
                        <div className="text-lg">Instructor's Signature</div>
                      </div>
                      <div className="left flex-2 flex-col px-8 ">
                        <div className="img">
                          <img src={sign2} alt="" className="h-[75px] w-[200px]" />
                        </div>
                        <div className="line h-[2px] w-full mt-2 bg-black"></div>
                        <div className="text-lg">Head's Signature</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDF targetRef={ref} filename='certificate.pdf' options={options}>
        {({ toPdf }) => <button onClick={toPdf} className='bg-blue-600 items-end text-white text-center py-2 px-4 hover:bg-blue-400 rounded-lg'>Download</button>}
      </PDF>
    </div>
  )
}

export default Home