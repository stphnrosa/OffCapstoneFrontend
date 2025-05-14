import{ Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Blogpage from './pages/Blogpage/Blogpage'
import Assessmentpage from './pages/AssessmentPage/AssessmentPage'
import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.css'

export default function App() {
  return (
    <>
    <Navbar /> 
    {/* Navbar has to be first, otherwise things will stop working on local host  */}
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/About' element={<Aboutpage />} />
      <Route path='/Blog' element={<Blogpage />} />
      <Route path='/Assessment' element={<Assessmentpage />} />
    
    </Routes>
    </>
  )
}
