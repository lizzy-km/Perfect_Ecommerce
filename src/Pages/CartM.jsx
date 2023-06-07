import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../services/AuthSlice';
import Cookies from 'js-cookie';
import {Link, useNavigate} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import CartCardM from '../Components/Cart/CartCardM';
import './home.css'


const CartM = () => {

    // const dispatch = useDispatch()
  

  const cart = useSelector(state => state?.productsSlice?.Cart)
  console.log(cart);

  const totalAmount = useSelector(state=> state.productsSlice?.totalamount)

// const [totalAmount,setTotalAmount] = useState()


  const token = Cookies.get('token')
  // const user = Cookies.get('user')
  console.log(token);
  const nav=useNavigate()
  const dispatch= useDispatch()

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

const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(()=>{
    
    if (!token) {
        nav('/login')
    }
    if(token){
        setIsLoggedIn(true)
    }
},[])

const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

//   const isExisted = cart?.find((item)=> item.id === data.id)


    if (cart?.length ===0) {
        return(
            <div className=' relative  flex justify-center items-center bg-[#75848E] w-[100%] h-screen mt-[0px] py-[0px] px-[60px] ' >
               
                {
                    isMobile &&  <div className=' bg-[#6b818f17]  text-[#d3dddd7c]  font-semibold text-center p-[1rem] text-4xl  rounded-lg box-shadow text-shadow ' >
                    <p>  Your Cart Is Empty!</p>
                  </div>
                }
         
          

           
          </div>
        )
    }else{
        return (
            <div className=' relative  flex flex-col gap-[2rem] bg-[#75848E] h-screen mt-[-60px] justify-center items-center py-[120px] px-[10px] ' >
                
                {
                    isMobile &&  <div className=' flex justify-start  text-center px-[0px]  items-center w-[100%] ' >
                    <h1 className=' border-b-2 w-[40%] box-shadow rounded-lg text-[#d3dddd] text-2xl font-semibold text-shadow ' >Your Cart</h1>
                  </div>
                }
             

                    
                       
                     {
                        isMobile &&  <div className=' w-[100%] flex flex-col gap-[1rem] text-[#d3dddd] ' >
                        {
                            cart?.map((data)=>{
                                return(
                                    <CartCardM  data={data} />
                                )
                            })
                        }
                      </div>
                    }
                    
             
                   
                    {
                        isMobile && <div className='text-[#d3DDDD] flex gap-0 w-[100%] justify-between ' >
                        <p className=' text-shadow text-[20px] flex items-center justify-center text-center '>Total Price:</p>
                        <p className='text-[#111111] flex items-center justify-center text-center text-sh-w font-semibold text-[24px] ' >$ {totalAmount.toFixed(2)} </p>
                      </div>
                    }
              

             
            </div>
          )
    }

  
}

export default CartM
