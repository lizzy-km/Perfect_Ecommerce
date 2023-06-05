import React from 'react'
import'./nav.css'
import {TfiShoppingCartFull} from 'react-icons/tfi'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { useProductsQuery } from '../services/ProductsApi'
import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NavBar = ({showMenu,hideMenu}) => {

    const data = useProductsQuery()
    const loading = data?.isLoading

    const cart = useSelector(state => state?.productsSlice?.Cart)

if (loading===false) {
    return (
        <div className=' relative overflow-hidden z-[99999] w-[100%] flex h-[60px] items-center px-[40px] nav justify-between ' >
            <Link to={'/'} className=' flex items-center justify-center cursor-pointer  font-[600] tracking-wider ' >
                <div className=' rounded-l-[10px] text-[#7A838F] bg-[#D3DDDD] text-[30px] pl-[10px] max-h-[50px] text-center  flex items-center   '>
                <p  >P</p>
    
                </div>
                <div className=' rounded-r-[10px] text-[#D3DDDD] bg-[#7A838F] text-[30px] pr-[10px] max-h-[55px] text-center flex items-center   '>
                <p  >erfect</p>
    
                </div>
            </Link>
    
            <div className=' flex h-[100%] items-center gap-6 ' >
                <Link to={'/cart'} className=' relative h-full text-[20px] flex items-center text-[#D3DDDD] ' >
                    <TfiShoppingCartFull className='cursor-pointer text-shadow z-[11] ' />
                    {
                        cart?.length !==0 && <span className=' nav absolute flex justify-center items-center text-sm  h-[1rem] top-[8%] z-[-1] left-[25%] w-[1rem] rounded-full text-[#d1dadd] text-center ' > 
                        <p>{cart?.length}</p>
                         </span>
                    }
                    
                </Link>
                <div onMouseEnter={showMenu} onMouseLeave={hideMenu} className=' z-[100] h-full text-[20px] flex items-center text-[#D3DDDD] '>
                <HiOutlineUserCircle className='cursor-pointer'/>
                    
                </div>
            </div>

            
            
        </div>
      )
}else{
    return (
        <div className=' overflow-y-hidden z-[99999] w-[100%] flex h-[70px] items-center px-[40px] nav justify-between ' >
            <div className=' flex items-center justify-center cursor-pointer  font-[600] tracking-wider ' >
                <div className=' rounded-l-[10px] text-[#7A838F] bg-[#D3DDDD] text-[40px] pl-[10px] max-h-[50px] text-center  flex items-center   '>
                <p  >P</p>
    
                </div>
                <div className=' rounded-r-[10px] text-[#D3DDDD] bg-[#7A838F] text-[40px] pr-[10px] max-h-[55px] text-center flex items-center   '>
                <p  >erfect</p>
    
                </div>
            </div>
    
            <div className=' flex h-[100%] items-center gap-6 ' >
                <div className=' h-full text-[30px] flex items-center text-[#626a74] ' >
                    {/* <TfiShoppingCartFull className='cursor-pointer' /> */}
                </div>
                <div className=' h-full text-[30px] flex items-center text-[#626a74] '>
                    {/* <HiOutlineUserCircle className='cursor-pointer'/> */}
                </div>
            </div>
            
        </div>
      )
}
 
}

export default NavBar