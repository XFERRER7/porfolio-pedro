'use client'
import React from 'react'
import { Title } from './Title'
import Image from 'next/image'
import quotesImg from '@/assets/quotes.svg'
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1496 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 1496, min: 873 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 873, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const Recommendations = () => {
  return (
    <div className='lg:px-0 px-5'>
      <Title
        text='Recomendações'
      />

      <Carousel
        className='mt-10 gap-10 flex'
        responsive={responsive}
      >

        <Card
          image=''
          name='Card 1'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card
          image=''
          name='Card 2'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card
          image=''
          name='Card 3'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card
          image=''
          name='Card 4'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
      </Carousel>

    </div >
  )
}


interface ICardProps {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const Card = ({ name, position, quote, image }: ICardProps) => {

  return (
    <div className='p-[1.1px] rounded-3xl recommendation-card md:w-[25.5rem] mini:w-[23rem] w-full container-selection-not-allowed cursor-pointer lg:mx-0 mx-auto'>
      <div className='p-[1.5px] rounded-3xl md:w-[25.5rem] mini:w-[23rem]  w-full bg-[#151515]'>
        <div className='h-48 bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5 overflow-hidden'>
          <div className='flex items-center justify-between'>


            <div className='flex items-center gap-3'>
              <div
                className='rounded-full w-14 h-14 bg-white'
              />

              <div>
                <h4>{name}</h4>
                <p className='text-[10px]'>{position}</p>
              </div>

            </div>

            <Image
              src={quotesImg}
              alt='quotes image'
              width={50}
              height={50}
              className='h-10 w-10'
            />
          </div>
          <p className='text-sm overflow-hidden text-ellipsis lg:line-clamp-4 line-clamp-3 cursor-pointer' title={quote}>{quote}</p>
        </div>
      </div>
    </div>
  )
}
