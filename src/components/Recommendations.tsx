'use client'
import React from 'react'
import { Title } from './Title'
import Image from 'next/image'
import quotesImg from '@/assets/quotes.svg'
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLanguage } from '@/hooks/useLanguage'

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 1300, min: 873 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 873, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const Recommendations = () => {

  const { translations } = useLanguage()

  return (
    <div className='lg:px-0 px-5'>
      <Title
        text={translations.recommendationsSection.title}
      />

      <Carousel
        className='mt-10 gap-10 flex'
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
      >

        {
          translations.recommendationsSection.recommendationsList.map((recommendation, index) => (
            <Card
              key={`${recommendation.title}-${index}`}
              name={recommendation.title}
              position={recommendation.position}
              quote={recommendation.quote}
              image={recommendation.image}
            />
          ))
        }

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
    <div className='p-[1.1px] rounded-3xl recommendation-card xl:w-[22rem] md:w-[28rem] mini:w-[22rem] w-full container-selection-not-allowed cursor-pointer lg:mx-0 mx-auto'>
      <div className='p-[1.5px] rounded-3xl xl:w-[22rem] md:w-[28rem] mini:w-[22rem]  w-full bg-[#151515]'>
        <div className='h-48 bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5 overflow-hidden'>
          <div className='flex items-center justify-between'>


            <div className='flex items-center gap-3'>

              <Image
                src={image}
                alt='profile image'
                width={50}
                height={50}
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
