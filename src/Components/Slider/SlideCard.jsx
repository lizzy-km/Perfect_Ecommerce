import React from 'react'
import './slider.css'
import {IoIosAdd,IoIosRemove} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../../services/ProductsSlice'

const SlideCard = ({data}) => {
  const dispatch = useDispatch()
  

  const cart = useSelector(state => state?.productsSlice?.Cart)
  console.log(cart);

  const isExisted = cart?.find((item)=> item.id === data.id)

  return (
    <div className=' tracking-wider  flex h-full w-[100%] justify-center gap-[4rem] items-center ' >
       <div className=' text-left flex flex-col w-[50%] h-[80%] gap-6  p-[1rem]  ' >
        <h1 className= ' text-2xl text-sh-w font-semibold ' > {data?.title} </h1>
        <p className=' h-[15rem] text-sh-w text-lg leading-6 ' > {data?.description} </p>

        <div className=' flex justify-between  items-center ' >
            <p className=' text-lg text-sh-w  ' > price: <b> ${data?.price}</b> </p>
            {
              !isExisted &&  <div onClick={()=>dispatch(addCart(data))} className=' text-shadow box-shadow text-[#D3DDDD] buttonBlur cursor-pointer  p-[.6rem] rounded-[10px] flex gap-2 items-center text-lg ' >
              <p>Add to cart</p>
              <IoIosAdd className=' text-xl ' />
          </div>
            }
            {
              isExisted  &&  <div onClick={()=>dispatch(removeCart(data))} className=' text-shadow box-shadow text-[#D3DDDD] buttonBlur cursor-pointer  p-[.6rem] rounded-[10px] flex gap-2 items-center text-lg ' >
               <p>Remove from cart</p>
               <IoIosRemove className=' text-xl ' />
           </div>
            }
           
        </div>
       </div>
       <div className=' flex flex-col w-[50%] justify-center items-center  '>
        <img className=' box-shadow rounded-[15px] slideImage w-[15rem] mix-blend-color-burn '  src={data?.image} alt=""/>
       </div>

        </div>
  )
}

export default SlideCard