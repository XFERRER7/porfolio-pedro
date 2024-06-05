import React from 'react'
import { Title } from './Title'

export const SendMessageSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>

      <Title
        text='Tem ideia sobre o projeto?'
      />

      <p className='text-sm w-96 mt-10'>
        Escreva aqui qualquer coisa sobre você para mostrar o que realmente você está fazendo ou almejando, etc.
      </p>

      <button
        className='button-gradient w-48 h-10 text-black rounded-full text-sm font-medium'
      >
        Envie uma mensagem
      </button>

    </div>
  )
}
