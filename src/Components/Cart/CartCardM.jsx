import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartQuantity, removeCart, subtractCartQuantity } from '../../services/ProductsSlice';

const CartCardM = ({data}) => {
    // const quantity = useSelector(state=> state.productsSlice.quantity)
    const dispatch= useDispatch()

    // console.log(totalAmount);

    const oneItemPrice = data?.quantity * data?.price



  return (
    <div className=' overflow-x-hidden flex gap-1 w-[100%] justify-evenly items-center box-shadow rounded-[20px] h-[140px] p-[1rem] ' >
      <div className=' flex  justify-center items-center ' >
        <img className='  w-[3rem] rounded-[20px] box-shadow mix-blend-multiply '  src={data?.image} alt=""/>
      </div>
      <div className=' flex flex-col justify-evenly h-[100%] w-[50%] ' >
        <div className=' flex flex-col gap-2 justify-start items-center ' >
            <h1 className=' text-sm font-medium text-shadow line-clamp-1 ' > {data?.title?.substring(0,25)}... </h1>
            <div>
            <p className=' line-clamp-2 text-[10px] text-shadow ' > {data?.description} </p>
        </div>
        </div>
       
        <div className=' text-shadow text-[10px] flex w-[100%] justify-between ' >
            <div className=' flex ' >
            <p>Price: $</p>
            <p> {data?.price} </p>
            </div>
          
            <div  className=' text-[10px] mb-[-15px] flex gap-1 ' >
        <p>Total:</p>
            <p> ${oneItemPrice} </p>
        </div>
        </div>
      </div>
      <div className= ' buttonBlur flex flex-col w-[10%] justify-center items-center gap-1  ' >
        <div onClick={()=>{
             dispatch(addCartQuantity(data))
            //  setTotalAmount(oneItemPrice* data?.quantity)
        }
        
        } >
            <p>+</p>
        </div>
        <div>
            <p>{data?.quantity}  </p>
        </div>
        <div onClick={()=> {
            dispatch(subtractCartQuantity(data))
            // setTotalAmount(oneItemPrice* data?.quantity)
        }
            } >
            <p>-</p>
        </div>

       
        
      </div>

      <div className=' flex self-start w-[10%] items-end justify-end ' onClick={()=>dispatch(removeCart(data))} >
        <p>X</p>
      </div>
     
    </div>
  )
}

export default CartCardM
