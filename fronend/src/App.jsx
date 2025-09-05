import './App.css'
import Course from './Components/Course';
import Signup from './Components/Signup';
import Home from './Home/Home';
import {Routes , Route} from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path = "/course" element = {<Course/>}/>
      <Route path='/signup' element ={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
