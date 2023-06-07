import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartQuantity, removeCart, subtractCartQuantity } from '../../services/ProductsSlice';

const CartCard = ({data}) => {
    // const oneItemPrice = useSelector(state=> state.productsSlice.oneItemPrice)
    const dispatch= useDispatch()
    
    // console.log(oneItemPrice);

    const oneItemPrice = data?.quantity * data?.price



  return (
    <div className=' flex items-center  gap-4 w-[600px] box-shadow rounded-[10px] h-[240px] px-[0rem] ' >
      <div className=' flex  justify-center items-center ' >
        <img className='  w-[12rem] rounded-[10px] box-shadow mix-blend-multiply '  src={data?.image} alt=""/>
      </div>
      <div className=' flex justify-evenly  flex-col gap-4 w-[25rem] h-[240px] ' >
        <div className=' flex flex-col gap-2 justify-start items-center ' >
            <h1 className=' text-sm font-medium text-shadow ' > {data?.title?.substring(0,65)}... </h1>
            <div>
            <p className=' line-clamp-3 text-[10px] text-shadow ' > {data?.description} </p>
        </div>
        </div>
       
        <div className='  text-[10px] flex items-center h-[1rem] w-auto justify-between ' >
            <div className='  text-[10px] flex items-center h-[1rem] w-auto justify-start '>
            <p className=' text-shadow text-[10px] flex items-center justify-center text-center '>Price: $</p>
            <p className='text-[#111111] flex items-center justify-center text-center text-sh-w font-semibold text-[14px] ' > {data?.price} </p>

            </div>
          
            <div className='  text-[10px] flex items-center  w-auto justify-start ' >
            <p className=' text-shadow text-[10px] flex items-center justify-center text-center '>Total: $</p>
            <p className='text-[#111111] flex items-center justify-center text-center text-sh-w font-semibold text-[14px] ' > ${oneItemPrice.toFixed(2)} </p>
        </div>
        </div>
       
      </div>
      
      <div className= ' buttonBlur gap-2  flex flex-col justify-center items-center text-shadow w-[10%] ' >
        <div onClick={()=>{
             dispatch(addCartQuantity(data))
            //  setTotalAmount(oneItemPrice* data?.quantity)
        }
        
        } >
            <p className=' text-4xl cursor-pointer ' >+</p>
        </div>
        <div>
            <p>{data?.quantity}  </p>
        </div>
        <div onClick={()=> {
            dispatch(subtractCartQuantity(data))
            // setTotalAmount(oneItemPrice* data?.quantity)
        }
            } >
            <p className=' text-4xl cursor-pointer '>-</p>
        </div>

       
        
      </div>

     
      
        <div className=' flex h-[100%] items-start p-[1rem] cursor-pointer hover:text-[#ee1a1a] ' onClick={()=>dispatch(removeCart(data))} >
        <p>X</p>
      </div>
     
    </div>
  )
}

export default CartCard
