import React from 'react'
import './slider.css'
import {IoIosAdd} from 'react-icons/io'

const SlideCardM = ({data}) => {
    return (
        <div className=' tracking-wider  flex h-full w-[100%] justify-center gap-[2rem] items-center ' >
           <div className=' text-left flex flex-col justify-center w-[70%] h-[80%] gap-4  p-[.5rem]  ' >
            <h1 className= ' line-clamp-1 text-2xl font-semibold ' > {data?.title} </h1>
            <p className=' line-clamp-3 h-auto text-xs leading-4 ' > {data?.description} </p>
    
            <div className=' flex justify-between  items-center ' >
                <p className=' text-xs ' > price: <b> ${data?.price}</b> </p>
                <div className=' gap-1 text-[#D3DDDD] buttonBlur cursor-pointer shadow-md p-[.3rem] rounded-[5px] flex mx-auto items-center text-xs ' >
                    <p>Add to cart</p>
                    <IoIosAdd className=' text-xs ' />
                </div>
            </div>
           </div>
           <div className=' flex flex-col w-[30%] justify-center items-center  '>
            <img className=' rounded-[10px] slideImage w-[8rem] px-[.2rem] mix-blend-color-burn '  src={data?.image} alt=""/>
           </div>
    
            </div>
      )
}

export default SlideCardM