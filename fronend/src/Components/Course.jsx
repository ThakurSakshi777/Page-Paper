import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

import axios from "axios";
import Cards from "./Cards";
import {Link} from "react-router-dom";

const Course = () => {
  const [ book , setBook] = useState([])
  useEffect(() =>{
    const getBook = async() =>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  } , [])
  return (
    <div>

        {/* Navbar Component */}
        <Navbar/>

        {/* course */}

         <div className='container px-4 mx-auto max-w-screen-2x1 md:px-20 '>
          
          {/* heading */}
              <div className='justify-center text-center mt-28 item-center'>
                <h1 className='text-2x1 md:text-4x1'>
                   We're delighted to heve you <span className='text-pink-500'> Here! :)</span>
                   </h1>
                   <p className='mt-12'>
                    Step into a world of books designed for every reader. Our collection brings together the best in fiction, non-fiction, children’s stories, and academic works—all carefully chosen to match your interests. With easy browsing and fast delivery, finding the right book has never been simpler.
                   </p>
                <Link to="/">
                   <button className='px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700'> Back</button>
                </Link>
              </div>
              
              {/* Cards */}
              <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
                 {
                  book.map((item)=>( 
                    <Cards key={item.id} item={item}/>
                  ))
                 }
              </div>
         </div>
        
    </div>
  )
}

export default Course