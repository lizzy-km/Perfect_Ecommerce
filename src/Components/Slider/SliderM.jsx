import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import './sliderM.css'
import { useSliderProductsQuery } from '../../services/ProductsApi';
import Autoplay from 'embla-carousel-autoplay';
import SlideCardM from './SlideCardM';

const SliderM = () => {
    const data = useSliderProductsQuery()

    console.log(data?.data);

    const sliderProducts = data?.data;
    return (
        <div className=' rounded-b-[30px] border  flex w-[100%] bg-[#d3dddd] mt-[0px] h-[300px] ' >
            <Carousel className=' rounded-b-[30px]  w-[100%]'
          maw='100%'
        //   mx="auto"
          withIndicators
          height={300}
          width='100%'
         
          styles={{
            indicator: {
    
              width: rem(5),
              height: rem(5),
              transition: 'width 250ms ease',
            //   color:'#222222',
    
              '&[data-active]': {
                width: rem(8),
                height:rem(8)
              },
            },
          }}
        >
            {
                sliderProducts?.map(data =>{
                    return(
                        <Carousel.Slide key={data?.id} className='rounded-b-[30px]' >
                        <div className='z-[-1] rounded-b-[30px] slide1 flex items-center justify-center h-[300px] w-[100%] ' >
                              <div className=' slideBlur w-[95%] h-[70%] ' >
                                  <SlideCardM data={data} />
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

export default SliderM
