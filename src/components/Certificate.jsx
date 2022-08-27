import React, { createRef } from 'react'
import PDF from 'react-to-pdf'

const ref = createRef()
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10.416, 6.25]
}

const Certificate = () => {
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
                    <div className="text-lg text-black "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDF targetRef={ref} filename='certificate.pdf' options={options}>
        {({toPdf}) => <button onClick={toPdf} className='bg-blue-600 items-end text-white text-center py-2 px-4 hover:bg-blue-400 rounded-lg'>Download</button>}
      </PDF>
    </div>
    
  )
}

export default Certificate