import React from 'react'
import { Title } from './Title'

export const SendMessageSection = () => {
  return (
    <div className='mt-20 flex flex-col gap-8'>

      <Title
        text='Tem ideia sobre o projeto?'
      />

      <p className='text-sm w-96 mt-5'>
        Escreva aqui qualquer coisa sobre você para mostrar o que realmente você está fazendo ou almejando, etc.
      </p>

      <button
        className='bg-primary-100 w-48 h-10 text-black rounded-full text-sm font-medium'
      >
        Envie uma mensagem
      </button>

    </div>
  )
}
