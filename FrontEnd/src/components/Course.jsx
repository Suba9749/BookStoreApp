import React, { useEffect, useState } from 'react'

import axios from "axios";
import Card from './Card';
import { Link } from 'react-router-dom';



function Course() {

  const [book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res= await axios.get("http://localhost:8080/book")
      console.log(res.data);
      setBook(res.data);
      }catch(e){
        console.log(e);
      }
    };
    getBook();
  },[]);


  return (
  <>
  <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4 '>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We're Delighted to have <span className='text-pink-700'>you Here!</span></h1>
      <p className='mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, tenetur nemo excepturi ut consectetur blanditiis distinctio fugiat quisquam corporis at recusandae repudiandae veniam obcaecati ipsum.</p>
     <Link to="/">
     <button className='bg-pink-800 text-white rounded-md
      py-3 px-2 mt-6 hover:bg-purple-900  duration-500'>Back</button></Link>
    </div>
    <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
      {
        book.map((item)=>(
          <Card key={item.id} item={item}/>
        ))

      }
    </div>
  </div>
  </>
  )
}

export default Course
