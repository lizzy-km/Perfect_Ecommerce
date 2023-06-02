import React from 'react'
import './slider.css'
import {IoIosAdd} from 'react-icons/io'

const SlideCard = ({data}) => {
  return (
    <div className=' tracking-wider  flex h-full w-[100%] justify-center gap-[4rem] items-center ' >
       <div className=' text-left flex flex-col w-[50%] h-[80%] gap-6  p-[1rem]  ' >
        <h1 className= ' text-2xl font-semibold ' > {data?.title} </h1>
        <p className=' h-[15rem] text-lg leading-6 ' > {data?.description} </p>

        <div className=' flex justify-between  items-center ' >
            <p className=' text-lg ' > price: <b> ${data?.price}</b> </p>
            <div className=' text-[#D3DDDD] buttonBlur cursor-pointer shadow-md p-[.6rem] rounded-[10px] flex gap-2 items-center text-lg ' >
                <p>Add to cart</p>
                <IoIosAdd className=' text-xl ' />
            </div>
        </div>
       </div>
       <div className=' flex flex-col w-[50%] justify-center items-center  '>
        <img className=' rounded-[15px] slideImage w-[15rem] mix-blend-color-burn '  src={data?.image} alt=""/>
       </div>

        </div>
  )
}

export default SlideCard