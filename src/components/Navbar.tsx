import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon } from "lucide-react";
import menuIcon from '@/assets/menu-icon.svg'

export const Navbar = () => {
  return (
    <div className="flex items-center justify-around">

      <div className="flex items-center gap-5">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={200}
          className="lg:h-12 lg:w-12 h-10 w-10"
        />
        <h1 className="lg:text-2xl text-lg">
          Pedro Henrique
        </h1>
      </div>


      <div className="p-[1.5px] menu-border rounded-full lg:hidden block">
        <div className="h-10 w-14 rounded-full bg-[#292929] flex items-center justify-center">
          <Image
            src={menuIcon}
            alt="menu icon"
            width={50}
            height={50}
            className="h-4 w-4"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="p-[1.5px] menu-border rounded-full lg:block hidden">
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
