import React, { useState } from 'react'
import'./nav.css'
import {TfiShoppingCartFull} from 'react-icons/tfi'
import {IoIosSearch,IoIosClose} from 'react-icons/io'
import { Input } from '@mantine/core';
import { RiMenu3Fill} from 'react-icons/ri'
import {HiOutlineUserCircle} from 'react-icons/hi'


const NavBarM = () => {

    const[menu,setMenu] = useState(' absolute right-[-300px] flex h-[100%] items-center justify-between ')

    const openMenu =()=>{
        setMenu(' bg-[#242424] px-[10px] w-[100%] absolute right-[0px] flex h-[100%] items-center justify-between ')
    }
    const closeMenu =()=>{
        setMenu(' absolute right-[-300px] flex h-[100%] items-center justify-between ')
    }


  return (
    <div className=' overflow-y-hidden relative w-[100%] flex h-[50px] items-center px-[10px] nav justify-between ' >
    <div className=' flex items-center justify-center  font-[600] tracking-wider ' >
        <div className=' rounded-l-[10px] text-[#7A838F] bg-[#D3DDDD] text-[20px] pl-[10px] max-h-[50px] text-center  flex items-center   '>
        <p  >P</p>

        </div>
        <div className=' rounded-r-[10px] text-[#D3DDDD] bg-[#7A838F] text-[20px] pr-[10px] max-h-[55px] text-center flex items-center   '>
        <p  >erfect</p>

        </div>
    </div>
        <div className=' h-full text-[30px] flex items-center text-[#626a74] '>
            <RiMenu3Fill onClick={openMenu} className='cursor-pointer'   />
        </div>
    
    <div className={menu} >
        <div className=' h-full  text-[30px] flex items-center text-[#626a74] '>
            <IoIosClose onClick={closeMenu} className='cursor-pointer'/>
        </div>
        <div className=' flex w-[70%] items-center h-full text-[#626a74] ' >
        <Input className='flex justify-between w-full'
      icon={<IoIosSearch />}
      variant="unstyled"
      placeholder="Search our products"
      radius="xl"
    />
        </div>
        <div className=' h-full  text-[30px] flex items-center text-[#626a74] ' >
            <TfiShoppingCartFull className='cursor-pointer'/>
        </div>
        <div className=' h-full  text-[30px] flex items-center text-[#626a74] '>
                <HiOutlineUserCircle className='cursor-pointer'/>
            </div>
    </div>
    
</div>
  )
}

export default NavBarM
