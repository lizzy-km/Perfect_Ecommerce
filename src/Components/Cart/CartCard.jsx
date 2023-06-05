import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartQuantity, removeCart, subtractCartQuantity } from '../../services/ProductsSlice';

const CartCard = ({data}) => {
    // const quantity = useSelector(state=> state.productsSlice.quantity)
    const dispatch= useDispatch()

    // console.log(totalAmount);

    const oneItemPrice = data?.quantity * data?.price



  return (
    <div className=' flex gap-4 w-[500px] box-shadow rounded-[20px] h-[140px] p-[1rem] ' >
      <div className=' flex  justify-center items-center ' >
        <img className='  w-[3rem] rounded-[20px] box-shadow mix-blend-multiply '  src={data?.image} alt=""/>
      </div>
      <div className=' flex flex-col gap-1 w-[60%] ' >
        <div className=' flex justify-start items-center ' >
            <h1 className=' text-sm font-medium text-shadow ' > {data?.title?.substring(0,25)}... </h1>
        </div>
        <div>
            <p className=' line-clamp-3 text-[10px] text-shadow ' > {data?.description} </p>
        </div>
        <div className=' text-shadow text-[10px] flex ' >
            <p>Price: $</p>
            <p> {data?.price} </p>
        </div>
      </div>
      <div className= ' buttonBlur gap-2  flex flex-col justify-center items-center text-shadow w-[10%] ' >
        <div onClick={()=>{
             dispatch(addCartQuantity(data))
            //  setTotalAmount(oneItemPrice* data?.quantity)
        }
        
        } >
            <p className=' text-4xl ' >+</p>
        </div>
        <div>
            <p>{data?.quantity}  </p>
        </div>
        <div onClick={()=> {
            dispatch(subtractCartQuantity(data))
            // setTotalAmount(oneItemPrice* data?.quantity)
        }
            } >
            <p className=' text-4xl '>-</p>
        </div>

       
        
      </div>

     
      <div  className=' text-[10px] h-[100%] justify-center items-center flex gap-1 ' >
        <p>Total: </p>
            <p> ${oneItemPrice} </p>
        </div>
        <div onClick={()=>dispatch(removeCart(data))} >
        <p>X</p>
      </div>
     
    </div>
  )
}

export default CartCard
