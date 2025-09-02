import './App.css'
import Course from './Components/Course';
import Home from './Home/Home';
import {Routes , Route} from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path = "/course" element = {<Course/>}/>
     </Routes>
    </>
  )
}

export default App
