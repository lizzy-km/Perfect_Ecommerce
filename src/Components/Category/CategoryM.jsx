import React, { useState } from 'react'
import './category.css'
import {IoIosSearch} from'react-icons/io'
import { Input } from '@mantine/core';
import { useProductsCategoryQuery } from '../../services/ProductsApi';
import {AiFillCloseCircle} from 'react-icons/ai'
const CategoryM = () => {

    const data = useProductsCategoryQuery()

    const showSearch = 
    <div className=' w-[100%] justify-between items-center flex  shadow-md rounded-full ' >
    <Input className=' w-[80%] category flex justify-between '
// icon={<IoIosSearch className=' text-xl text-[#111111] pl-[1rem] ' />}
    placeholder="Search our products"
    radius="xl"/>
    <div className=' w-[2rem] h-[2rem] flex items-center justify-center text-[#D3DDDD] rounded-full text-lg bg-[#626a74] ' >
        <IoIosSearch/>
    </div>
    <div onClick={()=>{setSearch( 
    hideSearch)
    setCat(' flex w-[90%] justify-between items-center ' )}} className=' text-[#111111] w-[2rem] text-xl ' >
        <AiFillCloseCircle/>
    </div>
    </div>


    const hideSearch = 
    <div className=' w-[11rem]  shadow-md rounded-full ' >
    <Input onClick={()=> {
        
        
        setSearch(showSearch)
        setCat('d-n')
    }}
icon={<IoIosSearch className='text-[1rem] text-[#D3DDDD] '  />}
placeholder=""
radius="xl"

/>
    </div>

  const Category = data?.currentData

  console.log(Category);
    const[cat,setCat]= useState(' flex w-[90%] justify-between items-center ' )

  const [search,setSearch] = useState(hideSearch)
    
    return (
        <div className=' overflow-hidden  flex justify-center items-center  h-[40px] w-[100%] category ' >
            <div className=' text-[8px] gap-3 h-[30px] w-[90%] flex items-center justify-center  '>
              {
                Category?.map(data =>{
                  return(
                    <div className={cat} >
                      <p className=' cursor-pointer text-[#D3DDDD] text-shadow ' > {data} </p>
                    </div>
                  )
                })
              }
                  
    
               
              {search}
              
            </div>
        </div>
      )
}

export default CategoryM