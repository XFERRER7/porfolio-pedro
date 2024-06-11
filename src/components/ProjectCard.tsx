import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface IProjectCardProps {
  name: string;
  description: string;
  image: StaticImageData;
}

export const ProjectCard = ({ name, description, image }: IProjectCardProps) => {
  return (
    <div className='w-full pb-10 bg-white rounded-3xl mt-10 text-black px-10 pt-20 flex justify-between relative mx-auto md:h-auto h-[44rem]'>

      <div className='flex flex-col gap-8'>
        <h3 className='font-bold text-3xl'>
          {name}
        </h3>

        <p className='text-[#000000CC] lg:w-[28rem]'>
          {description}
        </p>

        <button className='bg-black md:w-60 w-full h-[3.8rem] rounded-md text-white flex items-center justify-center gap-5 font-bold mt-10'>
          Descubra
          <ArrowRight size={24} />
        </button>
      </div>

      <Image
        src={image}
        alt="Smartphone"
        width={500}
        height={600}
        className='w-96 h-[31rem] absolute bottom-0 right-10 lg:block hidden'
      />

    </div>
  )
}
