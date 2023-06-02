import React, { useState } from 'react'
import { PasswordInput, TextInput } from '@mantine/core';
import { useLoginMutation } from '../../services/AuthApi';
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom'
import {  addUser } from '../../services/AuthSlice';
import Home from '../Home';
import Cookies from 'js-cookie';
import './login.css'


const LogIn = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const[error,setError]=useState([])
    const[head,setHead]=useState()

    const [login,{isLoading}] = useLoginMutation();

    console.log(isLoading);

    const nav = useNavigate();
    const dispatch = useDispatch()
    const LoginHandler =async  (e) =>{
        try{
           e.preventDefault();
           const user ={
           
            email,
            password,
           
           };
           const {data} = await login(user);
           const {error} = await login(user);
           dispatch(addUser({user:data?.user}));
        //    dispatch(addToken({token:data?.token}));
        Cookies.set('token', JSON.stringify(data?.token))

           if (data?.success) {
            nav('/')
            window.location.reload(true)

            console.log('success');
                <Home data={data} />

           }
        //    console.log(data);
           setHead(data)
           console.log(head);
           setError(error?.data?.errors)

        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className=' flex h-screen justify-center' >
    <form 
    onSubmit={LoginHandler}
     className=' w-96 p-7   flex flex-col shadow-lg gap-8  ' >
      <h2 className=' self-center text-2xl text-gray-500 font-semibold ' >Login</h2>
      {
        head?.success ===false && <h1 className=' text-[#ff1717] ' >Incorrect email or password! </h1>
      }
        
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
     
       
       <div className=' self-center flex gap-2  ' >
          
          <Link to='/signup' className=' cursor-pointer hover:text-blue-600 font-medium ' >You don't have any account yet?</Link>
       </div>
       {
        isLoading ===true ? (
            <button disabled  className=' bg-[#222222] text-slate-100 rounded-md p-2 font-medium ' >Sign in</button>

        ):(
            <button  type="submit" className=' loginButton text-slate-100 rounded-md p-2 font-medium ' >Sign in</button>

        )
       }
    </form>
  </div>
  )
}

export default LogIn
