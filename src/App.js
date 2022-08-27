import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import Certificate from './components/Certificate'
import { UserProvider } from './Contexts/UserContext'

const App = () => {
  return (
    <UserProvider>
    <div className='min-h-screen font-poppins'>
      <Router>
        <Routes> 
          <Route path="/" exact element={<Home />} />
          <Route path="/course" exact element={<Course />} />
          <Route path="/certificate" exact element={<Certificate />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App