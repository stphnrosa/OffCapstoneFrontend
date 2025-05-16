import{ Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import HeroPage from './components/HeroPage/HeroPage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Blogpage from './pages/Blogpage/Blogpage'
import BlogEditpage from './pages/BlogEditpage/BlogEditpage';
import Assessmentpage from './pages/AssessmentPage/AssessmentPage'
import BlogShowpage from './pages/BlogShowPage/BlogShowPage';
import Navbar from './components/Navbar/Navbar'


export default function App() {
  return (
    <>
    <Navbar /> 
    {/* Navbar has to be first, otherwise things will stop working on local host  */}
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/About' element={<Aboutpage />} />
      <Route path='/Blog' element={<Blogpage />} />
      <Route path='/Assessment' element= {<Assessmentpage />} />
      <Route path='/blogs/:id/edit' element={<BlogEditpage />} />
      <Route path='/blogs/:id' element={<BlogShowpage />} />

    
    </Routes>
    </>
  )
}
