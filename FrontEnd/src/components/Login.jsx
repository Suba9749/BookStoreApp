import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit=async (data)=>{
    const userInfo={
      email:data.email,
      password:data.password,
    }
 await axios.post("http://localhost:8080/user/login",userInfo)
 .then((res)=>{
  console.log(res.data);
  if(res.data){
    toast.success('login successfull');
    window.location.reload();
    localStorage.setItem("users",JSON.stringify(res.data.user));
   
  }
 }).catch((err)=>{
  if(err.response){
    console.log(err);
      toast.error('error User not exits!',err.response.data.message);
  }
 })
  };
 


  return (
   <>
   <div>
   <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog"  >
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:scale-110 " onClick={()=>document.getElementById("my_model_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    <div  className='mt-6 space-y-3'>
        <span>
            email
        </span>
        <br />
        <input {...register("email", { required: true})} type="email" placeholder='Enter Your Mail' className='w-80 px-3 py-1 border rounded-md outline-none' 
         />
         <br />
          {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
    </div>

    <div  className='mt-6 space-y-3'>
        <span>
           Password
        </span>
        <br />
        <input {...register("password", { required: true })} type="password" placeholder='Enter Your password' className='w-80 px-3 py-1 border rounded-md outline-none'
         />
         <br />
         {errors.password && <span className='text-sm text-red-700'>This field is required</span>}

    </div>
   
    <div className='flex justify-between mt-5'>
        <button className='bg-pink-800 rounded-md px-3 py-3 hover:bg-pink-900 duration-150'>Login</button>
      <p>Not Reigester? <Link to={"/signup"} className='underline text-blue-600 cursor-pointer'>Sign Up</Link></p>
     
    </div>
    </form>
  </div>
  
</dialog>

   </div>
   </>
  )
}

export default Login
