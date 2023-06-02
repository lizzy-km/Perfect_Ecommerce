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
    <div className=' rounded-b-[30px] border  flex w-[100%] bg-[#d3dddd] mt-[0px] h-[450px] ' >
        <Carousel className='slide1 rounded-b-[30px]  w-[100%]'
      maw='100%'
    //   mx="auto"
      withIndicators
      height={450}
      width='100%'
      
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {

          width: rem(8),
          height: rem(8),
          transition: 'width 250ms ease',
        //   color:'#222222',

          '&[data-active]': {
            width: rem(12),
            height:rem(12)
          },
        },
      }}
    >
        {
            sliderProducts?.map(data =>{
                return(
                    <Carousel.Slide key={data?.id} className='rounded-b-[30px]' >
                    <div className='z-[-1] rounded-b-[30px]  flex items-center justify-center h-[450px] w-[100%] ' >
                          <div className=' slideBlur shadow-lg w-[95%] h-[85%] ' >
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