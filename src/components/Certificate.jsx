import React, { createRef, useContext } from 'react'
import PDF from 'react-to-pdf'
import { UserContext } from '../Contexts/UserContext'
import sign from "../Assets/sign1.png"
import sign2 from "../Assets/sign2.png"

const ref =  createRef()
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10.416, 6.25]
}

const Certificate = () => {
  const [{currentUser}] = useContext(UserContext)
  return (
    <div className="pageWrapper flex flex-col items-center justify-center min-h-screen">
      <div className="certificate mb-8" ref={ref}>
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
                          <img src={sign} alt="" className="h-[75px] w-[200px]"/>
                        </div>
                        <div className="line h-[2px] w-1/3 mt-2 bg-black"></div>
                        <div className="text-lg">Instructor's Signature</div>
                      </div>
                      <div className="left flex-2 flex-col px-8 ">
                        <div className="img">
                          <img src={sign2} alt="" className="h-[75px] w-[200px]"/>
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
      {/* <PDF targetRef={ref} filename='certificate.pdf' options={options}>
        {({toPdf}) => <button onClick={toPdf} className='bg-blue-600 items-end text-white text-center py-2 px-4 hover:bg-blue-400 rounded-lg'>Download</button>}
      </PDF> */}
    </div>
    
  )
}

export default Certificate