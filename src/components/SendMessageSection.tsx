import React from 'react'
import { Title } from './Title'

export const SendMessageSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 lg:px-0 px-5 py-40' id='contact'>

      <Title
        text='Me achou interessante?'
      />

      <p className='text-sm md:w-96 mt-10 text-center'>
        Abra as portas para novas oportunidades e descubra como podemos fazer grandes coisas juntos!
      </p>

      <button
        className='button-gradient px-2 h-10 text-black rounded-full text-sm font-medium'
      >
        Me mande uma menssagem!
      </button>

    </div>
  )
}
