import React from 'react'
import { Title } from './Title'
import Image from 'next/image'

export const Recommendations = () => {
  return (
    <div className='mt-20'>
      <Title
        text='Depoimentos de clientes'
      />

      <div className='flex flex-wrap gap-10 mt-10 justify-center items-center'>

        <Card 
          image=''
          name='Client Name'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card 
          image=''
          name='Client Name'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card 
          image=''
          name='Client Name'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />
        <Card 
          image=''
          name='Client Name'
          position='Product designer'
          quote='s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        />

      </div>

    </div>
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
    <div className='p-[1.5px] rounded-3xl bg-zinc-700 w-[26rem]'>
      <div className='h-48 bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5 overflow-hidden'>
        <div className='flex items-center gap-3'>

          {/* <Image
            src={image}
            alt='face'
            width={100}
            height={100}
            className='rounded-full w-14 h-14'
          /> */}
          <div
            className='rounded-full w-14 h-14 bg-white'
          />
          <div>
            <h4>{name}</h4>
            <p className='text-[10px]'>{position}</p>
          </div>
        </div>
        <p className='text-sm overflow-hidden text-ellipsis lg:line-clamp-4 line-clamp-3 cursor-pointer' title={quote}>{quote}</p>
      </div>
    </div>
  )
}
