'use client'
import { Title } from './Title'
import { ProjectCard } from './ProjectCard'
import smartphone1 from '@/assets/smartphone.png'
import smartphone2 from '@/assets/smartphone2.png'
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLanguage } from '@/hooks/useLanguage'

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


export const Projects = () => {

  const { translations } = useLanguage()

  return (
    <div className='lg:px-0 px-5' id='projects'>
      <Title
        text={translations.projectsSection.title}
      />

      <Carousel
        className='mt-10 gap-10 flex'
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={8000}
      >
        {
          translations.projectsSection.projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              buttonText={translations.projectsSection.buttonText}
              linkProject={project.linkProject}
            />
          ))
        }
      </Carousel>

    </div>
  )
}
