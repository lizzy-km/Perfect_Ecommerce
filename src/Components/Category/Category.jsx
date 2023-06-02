import React from 'react'
import './category.css'
import {IoIosSearch} from'react-icons/io'
import { Input } from '@mantine/core';
import { useProductsCategoryQuery } from '../../services/ProductsApi';

const Category = () => {

  const data = useProductsCategoryQuery()

  console.log(data);

  const leftCategory = [
    {
      id:'1',
      name:'electronics'
    },
    {
      id:'2',
      name:'jewelery'
    }
  ]

  const rightCategory = [
    {
      id:'3',
      name:"men's clothing"
    },
    {
      id:'4',
      name:"women's clothing"

    }
  ]

  return (
    <div className=' text-[#D3DDDD]  flex justify-center items-center  h-[50px] w-[95%] category ' >
        <div className=' h-[40px] w-[96%] flex items-center justify-center  ' >
          {
            leftCategory?.map(data =>{
              return(
                <div className=' flex w-[20%] justify-center items-center ' >
                  <p className=' cursor-pointer text-shadow ' > {data?.name} </p>
                </div>
              )
            })
          }
              <div className=' w-[60%] shadow-md rounded-full ' >
              <Input className='text-[#D3DDDD]'
      icon={<IoIosSearch className='text-[#D3DDDD]' />}
      placeholder="Search our products"
      radius="xl"
    />
              </div>

              {
            rightCategory?.map(data =>{
              return(
                <div className=' flex w-[20%] justify-center items-center '>
                  <p className=' cursor-pointer text-shadow '> {data?.name} </p>
                </div>
              )
            })
          }
          
        </div>
    </div>
  )
}

export default Category