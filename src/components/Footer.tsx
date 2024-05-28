import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon, UserRound } from "lucide-react";

export const Footer = () => {
  return (
    <div className='flex items-center justify-between mt-40'>

      <div className="flex items-center gap-5">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={200}
          className="h-12 w-12"
        />
        <h1 className="text-xl">
          Pedro Henrique
        </h1>
      </div>


      <div className="h-12 w-[26rem] rounded-full border-2 border-primary-100 flex items-center justify-between text-sm pr-5 py-1 bg-[#1C1C1C]">

        <div className="h-full w-14 rounded-full bg-[#292929] flex items-center justify-center">
          <HomeIcon size={18} />
        </div>
        <a href="#">Sobre mim</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>

      </div>


      <div className="flex gap-1 items-center justify-center">

        <button
          className="bg-primary-100 text-black px-5 py-2 rounded-full"
        >
          Hire me
        </button>
        <div className="w-10 h-10 rounded-full bg-primary-100 text-black flex items-center justify-center">
          <UserRound size={16}/>
        </div>
      </div>

    </div>
  )
}
