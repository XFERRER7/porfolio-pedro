import Image from 'next/image'
import React from 'react'
import imgRight from '@/assets/ellipse-to-right.svg'
import imgLeft from '@/assets/ellipse-to-left.svg'
import imgDown from '@/assets/ellipse-to-down.svg'

interface ICareerItemProps {
  id: number
  title: string
  description: string
}

const images = [imgRight, imgDown, imgLeft ];

export const CareerItem = ({ id, title, description }: ICareerItemProps) => {

  const selectImage = () => {
    return images[(id - 1) % images.length];
  }

  return (
    <div className='flex flex-col gap-5' data-aos='fade-up' data-aos-once="true">

      <div className='flex gap-8'>

        <div className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center'>
          <span>
            {id}
          </span>
        </div>

        <Image
          src={selectImage()}
          alt="Ellipse Image"
          width={100}
          height={100}
          className='w-10 h-10'
        />

      </div>


      <div className='flex gap-8 lg:w-auto  overflow-hidden'>

        <div className='lg:h-80 w-0.5 bg-[#FFFFFF5C] ml-5'/>

        <div>
          <h4 className='font-semibold mb-3'>
            {title}
          </h4>
          <p className=''>
            {description}
          </p>
        </div>

      </div>

    </div>
  )
}
