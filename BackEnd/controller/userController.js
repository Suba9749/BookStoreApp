import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    try{
const{userName,email,password}=req.body;
const user=await User.findOne({email})
if(user){
    return res.status(400).json({message:"User already exits"});

}
const hashPassword=await bcryptjs.hash(password,10);
const createUser=new User({
    userName:userName,
    email:email,
    password:hashPassword,
})
 await createUser.save();
res.status(201).json({message:"user Created Successfully",user:{
    _id:createUser._id,
    userName:createUser.userName,
    email:createUser.email,
}});
    }catch(e){
console.log("error"+e.message);
res.status(500).json({message:"Internal server error"});
    }

};

export const login=async(req,res)=>{
    try{
const {email,password}=req.body;
const user=await User.findOne({email});
const isMatch=await bcryptjs.compare(password,user.password);
if(!user || !isMatch){
    return res.status(400).json({message:"invalid username or password"});
}else{
    return res.status(200).json({message:"Login successful",user:{userName:user.userName,
      _id:user._id,
      email:user.email
    }});
}
    }catch(e){
console.log(e);
res.status(500).json({message:"internal server error"});

    }
}