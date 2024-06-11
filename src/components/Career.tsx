'use client'
import { useLanguage } from '@/hooks/useLanguage'
import { CareerItem } from './CarrerItem'
import { Title } from './Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Career = () => {

  const { translations } = useLanguage()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='lg:px-0 px-5'>

      <Title
        text={translations.carrerSection.title}
      />

      <div className='flex flex-col gap-5 md:w-[45rem] mt-10'>
        {
          translations.carrerSection.careerItems.map(item => (
            <CareerItem key={item.id} id={item.id} title={item.title} description={item.description} />
          ))
        }
      </div>

    </div>
  )
}
