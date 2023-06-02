import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useLogoutMutation } from '../services/AuthApi'
import { useDispatch } from 'react-redux'
import { removeToken, removeUser } from '../services/AuthSlice'
import { useProductsQuery } from '../services/ProductsApi'
import SliderM from '../Components/Slider/SliderM'
import CategoryM from '../Components/Category/CategoryM'
const HomeM = () => {
    const token = Cookies.get('token')
    // const user = Cookies.get('user')
    console.log(token);
    const nav=useNavigate()
    const dispatch= useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        
        if (!token) {
            nav('/login')
        }
        if(token){
            setIsLoggedIn(true)
        }
    },[token])
    const [logout] = useLogoutMutation()
    const logoutHandler = async () =>{
        const {error} =await logout(token);
        const {data} =await logout(token);
        dispatch(removeUser())
            dispatch(removeToken())
            Cookies.remove('user')
            Cookies.remove('token')
        console.log(error?.data);
        window.location.reload(true)
        if (data?.success) {
            nav('/login')
           

        }
    }

    const data = useProductsQuery()

    console.log(data?.isLoading);

    const loading = data?.isLoading

    if (loading===false) {
        return (
            <div className=' overflow-y-hidden   flex flex-col w-[100%] ' >
                <div className=' flex w-[100%] h-auto ' >
                    <SliderM/>
                </div>
                <div className=' mainView mt-[-10px] z-[1] flex flex-col items-center justify-between rounded-t-[30px] bg-[#75848E] h-[900px] ' >
                    <div className=' flex w-[100%] h-[40px] justify-center items-center  ' >
                        <CategoryM/>
                    </div>
                </div>
           
            </div>
          )
    }else{
        return (
            <div className=' relative overflow-y-hidden   flex flex-col w-[100%] ' >
                <div className=' flex w-[100%] rounded-b-[30px] bg-[#d3dddd] h-[300px] ' >
                    {/* <SliderM/> */}
                </div>
                <div className=' mainView mt-[-10px] z-[1] flex flex-col items-center justify-between rounded-t-[30px] bg-[#75848E] h-[900px] ' >
                    <div className=' flex  ' >
                        {/* <Category/> */}
                    </div>
                </div>
                <div className=' loaderBlur absolute w-[300px] z-[1] rounded-full top-[12%] left-[20%]  h-[300px]  ' >
                    
                </div>
           
            </div>
          )
    }
   
   
}

export default HomeM