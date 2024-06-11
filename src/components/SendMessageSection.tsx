'use client'
import React from 'react'
import { Title } from './Title'
import { useLanguage } from '@/hooks/useLanguage'

export const SendMessageSection = () => {

  const { translations } = useLanguage()

  return (
    <div className='flex flex-col justify-center items-center gap-5 lg:px-0 px-5 py-40' id='contact'>

      <Title
        text={translations.contactSection.title}
      />

      <p className='text-sm md:w-96 mt-10 text-center'>
        {translations.contactSection.description}
      </p>

      <button
        className='button-gradient px-2 h-10 text-black rounded-full text-sm font-medium'
        onClick={() => window.open('mailto:pedroprogrammer@proton.me', '_blank')}
      >
        {translations.contactSection.buttonText}
      </button>

    </div>
  )
}
