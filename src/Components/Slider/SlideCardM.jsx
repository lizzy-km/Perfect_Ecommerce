import React from 'react'
import './slider.css'
import {IoIosAdd,IoIosRemove} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../../services/ProductsSlice'

const SlideCardM = ({data}) => {
    const cart = useSelector(state => state?.productsSlice?.Cart)
  console.log(cart);

  const dispatch = useDispatch()

  const isExisted = cart?.find((item)=> item?.id === data?.id)
    return (
        <div className=' tracking-wider  flex h-full w-[100%] justify-center gap-[2rem] items-center ' >
           <div className=' text-left flex flex-col justify-center w-[70%] h-[80%] gap-4  p-[.5rem]  ' >
            <h1 className= ' line-clamp-1 text-sh-w text-2xl font-semibold ' > {data?.title} </h1>
            <p className=' line-clamp-3 text-sh-w h-auto text-xs leading-4 ' > {data?.description} </p>
    
            <div className=' flex justify-between  items-center ' >
                <p className=' text-xs text-sh-w ' > price: <b> ${data?.price}</b> </p>
                {
                    isExisted &&
                    <div onClick={()=>dispatch(removeCart(data))}  className=' box-shadow gap-1 text-shadow text-[#D3DDDD] buttonBlur cursor-pointer  p-[.3rem] rounded-[5px] flex mx-auto items-center text-xs ' >
                    <p>Remove from cart</p>
                    <IoIosRemove className=' text-xs ' />
                </div>
                }
                {
                    !isExisted &&
                    <div onClick={()=>dispatch(addCart(data))} className=' box-shadow gap-1 text-shadow text-[#D3DDDD] buttonBlur cursor-pointer  p-[.3rem] rounded-[5px] flex mx-auto items-center text-xs ' >
                    <p>Add to cart</p>
                    <IoIosAdd className=' text-xs ' />
                </div>
                }
               
            </div>
           </div>
           <div className=' flex flex-col w-[30%] justify-center items-center  '>
            <img className=' box-shadow rounded-[10px] slideImage w-[8rem] px-[.2rem] mix-blend-color-burn '  src={data?.image} alt=""/>
           </div>
    
            </div>
      )
}

export default SlideCardM