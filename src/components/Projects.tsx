import React from 'react'
import { Title } from './Title'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import smartphone from '@/assets/smartphone.png'

export const Projects = () => {
  return (
    <div className=''>
      <Title
        text='Meus Projetos'
      />

      <div className='w-full pb-10 bg-white rounded-3xl mt-10 text-black px-10 pt-20 flex justify-between relative mx-auto'>

        <div className='flex flex-col gap-8'>
          <h3 className='font-bold text-3xl'>
            Kiwi Manga
          </h3>
 
          <p className='text-[#000000CC] w-[28rem]'>
            Meu aplicativo de sucesso, desenvolvido com um grupo de amigos, chama-se Kiwi Manga. É um aplicativo que facilita o acesso dos leitores ao manga e está disponível na Play Store com mais de 100.000 downloads e 5.000 usuários ativos. Eu o criei usando Flutter para o front-end e Next.js para o back-end. Foi uma experiência desafiadora, mas gratificante, ver o impacto positivo que teve em seus usuários.
          </p>

          <button className='bg-black w-60 h-[3.8rem] rounded-md text-white flex items-center justify-around font-bold mt-10'>
            Descubra
            <ArrowRight size={24} />
          </button>
        </div>

        <Image
          src={smartphone}
          alt="Smartphone"
          width={500}
          height={600}
          className='w-96 h-[31rem] absolute bottom-0 right-10'
        />

      </div>

    </div>
  )
}
