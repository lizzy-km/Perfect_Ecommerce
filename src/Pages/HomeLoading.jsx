import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './loader.css'

const HomeLoading = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  if (isDesktop) {
    return (
      <div className=' relative flex justify-center items-center w-[100%] h-[500px] ' >
           <div className=' loader flex items-center justify-center   font-[600] tracking-wider ' >
                  <div className='  rounded-l-[20px] text-[#7A838F] bg-[#D3DDDD]  pl-[20px] h-[80px] text-center  flex items-center   '>
                  <p  >P</p>
      
                  </div>
                  <div className='  rounded-r-[20px] text-[#D3DDDD] bg-[#7A838F] pr-[20px] h-[85px] text-center flex justify-center items-center   '>
                  <p  >erfect</p>
      
                  </div>
              </div>
      </div>
    )
  }
  if (isTablet) {
    return (
      <div className=' relative flex justify-center items-center w-[100%] h-screen ' >
           <div className='loader flex items-center justify-center  font-[600] tracking-wider ' >
                  <div className=' rounded-l-[20px] text-[#7A838F] bg-[#D3DDDD]  pl-[20px] h-[80px] text-center  flex items-center   '>
                  <p  >P</p>
      
                  </div>
                  <div className=' rounded-r-[20px] text-[#D3DDDD] bg-[#7A838F]  pr-[20px] h-[85px] text-center flex justify-center items-center   '>
                  <p  >erfect</p>
      
                  </div>
              </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className=' relative flex justify-center items-center w-[100%] h-screen ' >
           <div className='loader flex items-center justify-center   font-[600] tracking-wider ' >
                  <div className=' rounded-l-[20px] text-[#7A838F] bg-[#D3DDDD]  pl-[20px] h-[60px] text-center  flex items-center   '>
                  <p  >P</p>
      
                  </div>
                  <div className=' rounded-r-[20px] text-[#D3DDDD] bg-[#7A838F]  pr-[20px] h-[65px] text-center flex justify-center items-center   '>
                  <p  >erfect</p>
      
                  </div>
              </div>
      </div>
    )
  }

 
}

export default HomeLoading