import { PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../services/AuthApi';

const SignUp = () => {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[password_confirmation,setPassword_confirmation]=useState();

  const[error,setError]=useState([])

  const [register] = useRegisterMutation();

  const nav = useNavigate();

  const registerHandler =async  (e) =>{
      try{
         e.preventDefault();
         const user ={
          name,
          email,
          password,
          password_confirmation
         };
         const {data} = await register(user);
         const {error} = await register(user);
         if (data?.success) {
          nav('/login')
         }
         console.log(data);
         console.log(error.data.errors);
         setError(error.data.errors)
      }catch(error){
          console.log(error);
      }
  }

return (
  <div className=' flex h-screen justify-center' >
    <form 
    onSubmit={registerHandler}
     className=' w-96 p-7   flex flex-col shadow-lg gap-8  ' >
      <h2 className=' self-center text-2xl text-gray-500 font-semibold ' >Register</h2>
      <div>
      <TextInput value={name} onChange={(e)=>setName(e.target.value)}
      placeholder='Enter your name...'
       />
          <p className=' text-red-600 ' > {error?.name} </p>
      </div>
      <div>
      <TextInput value={email} onChange={(e)=>setEmail(e.target.value)}
      placeholder='Enter your email...'
       />
       <p className=' text-red-600 ' > {error?.email} </p>
      </div>
      <div>
      <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}
      placeholder='Enter your password...'
       />
      <p className=' text-red-600 ' > {error?.password} </p>
      </div>
      <div>
      <PasswordInput value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)}
      placeholder='Confirm your password...'
       />
        <p className=' text-red-600 ' > {error?.password} </p>
      </div>
       
       <div className=' self-center flex gap-2  ' >
          
          <Link to='/login' className=' cursor-pointer hover:text-blue-600 font-medium ' >Already have an account?</Link>
       </div>
       <button type="submit" className=' bg-blue-600 text-slate-100 rounded-md p-2 font-medium ' >Sign up</button>
    </form>
  </div>
)
}

export default SignUp
