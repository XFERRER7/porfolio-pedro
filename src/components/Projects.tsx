'use client'
import { Title } from './Title'
import { ProjectCard } from './ProjectCard'
import smartphone1 from '@/assets/smartphone.png'
import smartphone2 from '@/assets/smartphone2.png'
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1496 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 1496, min: 873 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 873, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const projectsList = [
  {
    name: 'Kiwi Manga',
    description: 'Meu aplicativo de sucesso, desenvolvido com um grupo de amigos, chama-se Kiwi Manga. É um aplicativo que facilita o acesso dos leitores ao manga e está disponível na Play Store com mais de 100.000 downloads e 5.000 usuários ativos. Eu o criei usando Flutter para o front-end e Next.js para o back-end. Foi uma experiência desafiadora, mas gratificante, ver o impacto positivo que teve em seus usuários.',
    image: smartphone1
  },
  {
    name: 'Wealt: Finanças Pessoais',
    description: 'Meu aplicativo de sucesso, desenvolvido com um grupo de amigos, chama-se Kiwi Manga. É um aplicativo que facilita o acesso dos leitores ao manga e está disponível na Play Store com mais de 100.000 downloads e 5.000 usuários ativos. Eu o criei usando Flutter para o front-end e Next.js para o back-end. Foi uma experiência desafiadora, mas gratificante, ver o impacto positivo que teve em seus usuários.',
    image: smartphone2
  }
]

export const Projects = () => {
  return (
    <div className='lg:px-0 px-5' id='projects'>
      <Title
        text='Meus Projetos'
      />

      <Carousel
        className='mt-10 gap-10 flex'
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={8000}
      >
        {
          projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
            />
          ))
        }
      </Carousel>

    </div>
  )
}
