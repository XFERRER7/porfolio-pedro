import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon, UserRound } from "lucide-react";

export const Footer = () => {
  return (
    <div className='flex items-center relative'>

      <div className="flex items-center gap-5 absolute left-0">
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


      <div className="p-0.5 menu-border rounded-full mx-auto">
        <div className="h-12 w-[26rem] rounded-full flex items-center justify-between text-sm pr-5 py-1 bg-[#1C1C1C]">

          <div className="h-full w-14 rounded-full bg-[#292929] flex items-center justify-center">
            <HomeIcon size={18} />
          </div>
          <a href="#">Sobre mim</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>

        </div>
      </div>

    </div>
  )
}
