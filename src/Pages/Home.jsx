import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useLogoutMutation } from '../services/AuthApi'
import { useDispatch, useSelector } from 'react-redux'
import { removeToken, removeUser } from '../services/AuthSlice'
import { useProductsQuery } from '../services/ProductsApi'
import Slider from '../Components/Slider/Slider'
import Category from '../Components/Category/Category'
import { addProducts, removeProducts } from '../services/ProductsSlice'
import'./home.css'

const Home = ({menu,showMenu,hideMenu}) => {
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
    useEffect(()=>{
        dispatch(removeProducts(data?.data))
    },[])
  const loading = data?.isLoading
    const Products = useSelector(state => state?.productsSlice?.Products)

    // console.log(data);
    console.log(loading);

    if (loading ===false) {
        return (
            <div className=' relative   flex flex-col w-[100%] ' >
                <div className=' flex w-[100%] h-auto ' >
                    <Slider/>
                </div>
                <div className=' mainView mt-[-10px] z-[1] flex flex-col items-center justify-between rounded-t-[30px] bg-[#75848E] h-[900px] ' >
                    <div className=' flex  ' >
                        <Category/>
                    </div>
                </div>
                <div onMouseEnter={showMenu} onMouseLeave={hideMenu} className={menu} >
                <div className=' cursor-pointer ' >
                    <p>Account Setting</p>
                </div>
                <div onClick={logoutHandler} className=' cursor-pointer hover:text-[#fc4040] ' >
                    <p>Logout</p>
                </div>
            </div>
            </div>
          )
    }else{
        return (
            <div className='   flex flex-col w-[100%] ' >
                <div className='  flex w-[100%] h-[450px] rounded-b-[30px] bg-[#d3dddd] ' >
                    {/* <Slider/> */}
                </div>
                <div className='  mainView mt-[-10px] z-[1] flex flex-col items-center justify-between rounded-t-[30px] bg-[#75848E] h-[900px] ' >
                    <div className=' flex  ' >
                        {/* <Category/> */}
                    </div>
                </div>
           
            </div>
          )
    }
   
 
}

export default Home