import { CareerItem } from './CarrerItem'
import { Title } from './Title'

const carrerItems = [
  {
    id: 1,
    title: 'Sankhya Gestão de Negócio - Mai. 2023',
    description: 'Na Sankhya, trabalhei no projeto BIA, o Assistente de Gerenciamento Virtual. BIA é um chatbot que auxilia no gerenciamento de negócios, especialmente quando o acesso ao computador é limitado. Utilizei tecnologias como MOBX, segui os princípios SOLID e adotei uma abordagem de arquitetura limpa para desenvolver o sistema. Além disso, realizei manutenção e correções em aplicativos nativos iOS usando Swift. Minha experiência na Sankhya aprimorou minhas habilidades técnicas e me proporcionou uma compreensão sólida de como a tecnologia pode impulsionar processos de negócios'
  },
  {
    id: 2,
    title: 'Sankhya Gestão de Negócio - Mai. 2023',
    description: 'Na Sankhya, trabalhei no projeto BIA, o Assistente de Gerenciamento Virtual. BIA é um chatbot que auxilia no gerenciamento de negócios, especialmente quando o acesso ao computador é limitado. Utilizei tecnologias como MOBX, segui os princípios SOLID e adotei uma abordagem de arquitetura limpa para desenvolver o sistema. Além disso, realizei manutenção e correções em aplicativos nativos iOS usando Swift. Minha experiência na Sankhya aprimorou minhas habilidades técnicas e me proporcionou uma compreensão sólida de como a tecnologia pode impulsionar processos de negócios'
  },
  {
    id: 3,
    title: 'Sankhya Gestão de Negócio - Mai. 2023',
    description: 'Na Sankhya, trabalhei no projeto BIA, o Assistente de Gerenciamento Virtual. BIA é um chatbot que auxilia no gerenciamento de negócios, especialmente quando o acesso ao computador é limitado. Utilizei tecnologias como MOBX, segui os princípios SOLID e adotei uma abordagem de arquitetura limpa para desenvolver o sistema. Além disso, realizei manutenção e correções em aplicativos nativos iOS usando Swift. Minha experiência na Sankhya aprimorou minhas habilidades técnicas e me proporcionou uma compreensão sólida de como a tecnologia pode impulsionar processos de negócios'
  },
  {
    id: 4,
    title: 'Sankhya Gestão de Negócio - Mai. 2023',
    description: 'Na Sankhya, trabalhei no projeto BIA, o Assistente de Gerenciamento Virtual. BIA é um chatbot que auxilia no gerenciamento de negócios, especialmente quando o acesso ao computador é limitado. Utilizei tecnologias como MOBX, segui os princípios SOLID e adotei uma abordagem de arquitetura limpa para desenvolver o sistema. Além disso, realizei manutenção e correções em aplicativos nativos iOS usando Swift. Minha experiência na Sankhya aprimorou minhas habilidades técnicas e me proporcionou uma compreensão sólida de como a tecnologia pode impulsionar processos de negócios'
  }
]

export const Career = () => {
  return (
    <div className='lg:px-0 px-5'>

      <Title
        text='Carreira'
      />

      <div className='flex flex-col gap-5 md:w-[45rem] mt-10'>
        {
          carrerItems.map(item => (
            <CareerItem key={item.id} id={item.id} title={item.title} description={item.description} />
          ))
        }
      </div>

    </div>
  )
}
