import{ Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Blogpage from './pages/Blogpage/Blogpage'
import Assessmentpage from './pages/AssessmentPage/AssessmentPage'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/About' element={<Aboutpage />} />
      <Route path='/Blog' element={<Blogpage />} />
      <Route path='/Assessment' element={<Assessmentpage />} />
    </Routes>
    </>
  )
}
