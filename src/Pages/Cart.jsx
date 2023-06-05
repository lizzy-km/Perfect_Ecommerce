import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../services/AuthSlice';
import Cookies from 'js-cookie';
import {Link, useNavigate} from 'react-router-dom'
import CartCard from '../Components/Cart/CartCard';
import { useMediaQuery } from 'react-responsive';
import CartCardM from '../Components/Cart/CartCardM';


const Cart = ({menu,showMenu,hideMenu}) => {

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
},[token])

const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

//   const isExisted = cart?.find((item)=> item.id === data.id)


    if (cart?.length ===0) {
        return(
            <div className=' flex bg-[#28363a] h-screen mt-[-60px] py-[120px] px-[60px] ' >
            Your Cart Is Empty!

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
            <div className=' flex flex-col gap-[2rem] bg-[#28363a] h-screen mt-[-60px] justify-center items-center py-[120px] px-[60px] ' >
              <div className=' flex justify-center items-center w-[100%] ' >
                <h1 className=' text-[#d3dddd] text-2xl font-semibold ' >Your Cart</h1>
              </div>

                    {
                        isDesktop &&  <div className=' flex flex-col gap-[1rem] text-[#d3dddd] ' >
                        {
                            cart?.map((data)=>{
                                return(
                                    <CartCard  data={data} />
                                )
                            })
                        }
                      </div>
                    }
                     {
                        isMobile &&  <div className=' flex flex-col gap-[1rem] text-[#d3dddd] ' >
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
                        isTablet &&  <div className=' flex flex-col gap-[1rem] text-[#d3dddd] ' >
                        {
                            cart?.map((data)=>{
                                return(
                                    <CartCard  data={data} />
                                )
                            })
                        }
                      </div>
                    }
             

              <div className='text-[#d3DDDD] flex gap-2' >
                <p>Total Price:</p>
                <p className=' text-[#d3DDDD] ' > {totalAmount.toFixed(2)} </p>
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
    }

  
}

export default Cart
