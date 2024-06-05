import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse gap-5 items-center relative lg:px-0 px-5'>

      <div className="flex items-center gap-5 lg:absolute lg:left-0">
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
        <div className="h-12 md:w-[26rem] rounded-full flex items-center justify-between md:text-sm text-xs gap-4 pr-5 py-1 bg-[#1C1C1C]">

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
