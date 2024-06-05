import Image from 'next/image'
import starsImg from '@/assets/stars.svg'

interface ITitleProps {
  text: string
}

export const Title = ({ text }: ITitleProps) => {
  return (
    <div className='flex items-center gap-5'>
      <h3 className='lg:text-3xl text-2xl font-medium'>{text}</h3>
      <Image
        src={starsImg}
        alt="Stars"
        width={100}
        height={100}
        className='w-8 h-8'
      />
    </div>
  )
}
