import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from "axios";
import toast from 'react-hot-toast';



function SignUp() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit=async (data)=>{
    const userInfo={
      userName:data.userName,
      email:data.email,
      password:data.password,
    }
 await axios.post("http://localhost:8080/user/signup",userInfo)
 .then((res)=>{
  console.log(res.data);
  if(res.data){
    toast.success('signup successfull');
    <Navigate to="/"/>
  }
  localStorage.setItem("users",JSON.stringify(res.data.user));
 }).catch((err)=>{
  if(err.response){
    console.log(err);
      toast.success("error User already exits",+err.
      response.data.message);
  }
 })
};

  return (
   <>
   <div className='flex h-screen items-center justify-center '>
   <div className=" border-[2px] p-11 rounded-lg ">
  <div className="model-box">
    <form   onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:scale-110 "><Link to={"/"}>✕</Link></button>
  
    <h3 className="font-bold text-lg">Login</h3>
    
    <p className="py-4"> click on ✕ button to close</p>
    <div  className='mt-6 space-y-3'>
        <span>
            email
        </span>
        <br />
        <input {...register("email", { required: true})} type="email" placeholder='Enter Your Mail' className='w-80 px-3 py-1 border rounded-md outline-none'/>
        <br />
        {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
    </div>
    <div  className='mt-6 space-y-3'>
        <span>
           username
        </span>
        <br />
        <input {...register("userName", { required: true})} type="text" placeholder='Enter Your @username' className='w-80 px-3 py-1 border rounded-md outline-none'/>
        <br />
        {errors.userName && <span className='text-sm text-red-700'>This field is required</span>}
    </div>

    <div  className='mt-6 space-y-3'>
        <span>
           Password
        </span>
        <br />
        <input {...register("password", { required: true })}  type="password" placeholder='Enter Your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
    </div>
   
    <div className='flex justify-between mt-5'>
        <button className='bg-pink-800 rounded-md px-3 py-3 hover:bg-pink-900 duration-150'>SignUp</button>
      <p>Have account? < button className='underline text-blue-600 cursor-pointer' 
      
      onClick={()=>document.getElementById("my_modal_3").showModal()}>Login
        </button>
        <Login/>
     
      </p>
    </div>
    </form>
  </div>
</div>
   </div>
   </>
  )
}

export default SignUp
