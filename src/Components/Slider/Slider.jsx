import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import './slider.css'
import SlideCard from './SlideCard';
import {  useSliderProductsQuery } from '../../services/ProductsApi';
import Autoplay from 'embla-carousel-autoplay';


const Slider = () => {
    const autoplay = useRef(Autoplay({ delay: 9000 }));
    const data = useSliderProductsQuery()

    console.log(data?.data);

    const sliderProducts = data?.data;

  return (
    <div className=' rounded-b-[30px] border  flex w-[100%] bg-[#d3dddd] mt-[0px] h-[570px] ' >
        <Carousel className=' rounded-b-[30px]  w-[100%]'
      maw='100%'
    //   mx="auto"
      withIndicators
      height={570}
      width='100%'
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {

          width: rem(10),
          height: rem(10),
          transition: 'width 250ms ease',
        //   color:'#222222',

          '&[data-active]': {
            width: rem(16),
            height:rem(16)
          },
        },
      }}
    >
        {
            sliderProducts?.map(data =>{
                return(
                    <Carousel.Slide key={data?.id} className='rounded-b-[30px]' >
                    <div className='z-[-1] rounded-b-[30px] slide1 flex items-center justify-center h-[570px] w-[100%] ' >
                          <div className=' slideBlur w-[95%] h-[85%] ' >
                              <SlideCard data={data} />
                          </div>
                      </div>
              
                    </Carousel.Slide>
                )
            })
        }
    
     
      
      {/* ...other slides */}
    </Carousel>
    </div>
  )
}

export default Slider