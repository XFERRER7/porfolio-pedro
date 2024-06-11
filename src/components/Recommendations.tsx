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

const recommendationsList = [
  {
    title: 'Ewerton Sobral',
    position: 'Gestor de Projetos',
    quote: 'Eu tive o prazer de trabalhar com Pedro em nossa equipe de desenvolvimento durante alguns meses e fiquei muito impressionado com seu desempenho. Ele é um profissional extremamente dedicado e comprometido, sempre disposto a aprender e a aprimorar suas habilidades. Durante seu tempo conosco, Pedro trabalhou com a plataforma Flutter e mostrou um ótimo domínio dessa tecnologia. Ele foi capaz de criar aplicativos com rapidez e eficiência, contribuindo diretamente para o sucesso de nossos projetos. Além disso, sempre se mostrou disposto a aprender e ajudar os colegas e a colaborar em todas as tarefas que lhe foram atribuídas. Estou confiante de que Pedro continuará a ter sucesso em sua carreira de desenvolvedor e recomendo ele sem reservas. Pedro foi uma adição valiosa à nossa equipe e tenho certeza de que fará o mesmo em qualquer ambiente de trabalho.',
    image: 'https://media.licdn.com/dms/image/D4D03AQEkov_xz40u2A/profile-displayphoto-shrink_400_400/0/1673620885160?e=1723680000&v=beta&t=aduHt7NDDt1pTBWWs2_c_jhlSoW03uj2LhMdaTROJLQ'
  },
  {
    title: 'Lucas Alexandre',
    position: 'Desenvolvedor Front End',
    quote: 'Recomendo o Pedro Santos por ser um profissional que busca crescimento, está disposto a aprender sempre mais e tem um excelente trabalho em equipe. Muito responsável e dedicado em suas tarefas!',
    image: 'https://media.licdn.com/dms/image/C4D03AQGqnp3A3Uet1A/profile-displayphoto-shrink_400_400/0/1632780120274?e=1723680000&v=beta&t=9T8JDAb0LL5aBJB5B9ikCXSicGgmYG5XSMEX-JXjgCk'
  },
  {
    title: 'Eduardo Ferreira Leite',
    position: 'Professor',
    quote: 'Trabalhar com o pedro foi uma experiencia otima, sempre muito gentil e proativo. Um otimo profissional e uma pessoa incrivel.',
    image: 'https://media.licdn.com/dms/image/D4D03AQHKfnXnwprxmg/profile-displayphoto-shrink_400_400/0/1717685019793?e=1723680000&v=beta&t=RTluanG6ExzKiDRln44trRTJVFTC-T7U2UaFmxnzVDY'
  },
  {
    title: 'Renan Santos de Oliveira',
    position: 'Desenvolvedor Mobile',
    quote: 'Pedro é um excelente desenvolvedor, ele é uma pessoa extremamente motivada e dedicada, sempre disposta a aprender e melhorar suas habilidades. Sempre buscando a melhorar cada vez mais, buscando conhecimento e capaz de resolver problemas complexos e ótimo para trabalhar em equipe.',
    image: 'https://media.licdn.com/dms/image/C4E03AQFH-D42yHodiA/profile-displayphoto-shrink_400_400/0/1635767985794?e=1723680000&v=beta&t=uUQ6gzwCHKYQ-5sqwLURSuOod4CmJFCacfqDEBB81z4'
  },
  {
    title: 'Mario Candido',
    position: 'Software Engineer',
    quote: 'Me identifiquei com o Pedro e seu irmão gêmeo desde o primeiro dia de aula no nosso curso de ADS. Pedro pensa fora da caixa e esta sempre disposto a ajudar, além de ser pró ativo para buscar resolução de problemas e ir atrás de aprender como as coisas funcionam. Adoraria trabalhar junto com ele em algum projeto fora da faculdade',
    image: 'https://media.licdn.com/dms/image/D4D03AQEn3namQGv55g/profile-displayphoto-shrink_400_400/0/1713634073833?e=1723680000&v=beta&t=chh_ixli6QjD6cqAXddz5U7lbi6ldn46IP2ujHHUtBc'
  }
]

export const Recommendations = () => {
  return (
    <div className='lg:px-0 px-5'>
      <Title
        text='Recomendações'
      />

      <Carousel
        className='mt-10 gap-10 flex'
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
      >

        {
          recommendationsList.map((recommendation, index) => (
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
    <div className='p-[1.1px] rounded-3xl recommendation-card md:w-[25.5rem] mini:w-[23rem] w-full container-selection-not-allowed cursor-pointer lg:mx-0 mx-auto'>
      <div className='p-[1.5px] rounded-3xl md:w-[25.5rem] mini:w-[23rem]  w-full bg-[#151515]'>
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
