import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();

  const handelLogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null,
        })
        localStorage.removeItem("users");
        toast.success("Logout Successful");
       window.location.reload();
       
    } catch (e) {
        toast.error("error",e.message);
        setTimeout(()=>{

        },3000);
    }
  }

  return (
   <>
   <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handelLogout}>Logout</button>
   </>
  )
}

export default Logout
