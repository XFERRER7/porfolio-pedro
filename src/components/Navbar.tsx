import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon, X } from "lucide-react";
import menuIcon from '@/assets/menu-icon.svg'
import { Switch } from "./Switch";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import AOS from 'aos';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, [])

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

      {/* Mobile menu */}
      <div className="p-[1.5px] menu-border rounded-full md:hidden block" onClick={toggleMenu}>
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

      {/* Mobile menu content */}
      {isMenuOpen && (
        <div className={`
          h-screen w-screen md:hidden bg-zinc-900 absolute top-28 left-0 z-10
          transition-all duration-500 ease-in 
          `}
          data-aos="fade-down"
        >
          <div className="flex items-center justify-end mt-5 mr-5">
            <X className="cursor-pointer" size={35} onClick={toggleMenu} />
          </div>

          <ul className='text-2xl text-quaternary-100 w-full h-full flex flex-col items-center pt-16 gap-20'>
            <Switch />
            <a className='cursor-pointer' href='#about'
              onClick={toggleMenu}
            >
              {translations.navbar.about}
            </a>
            <a className='cursor-pointer' href='#projects'
              onClick={toggleMenu}
            >
              {translations.navbar.projects}
            </a>
            <a className='cursor-pointer' href='#contact'
              onClick={toggleMenu}
            >
              {translations.navbar.contact}
            </a>
          </ul>
        </div>
      )}

      {/* Desktop */}
      <div className="p-[1.5px] menu-border rounded-full md:block hidden">
        <div className="h-12 w-[28rem] rounded-full flex items-center justify-between text-sm pr-5 py-1 bg-[#1C1C1C]">
          <div className="h-full w-14 rounded-full bg-[#292929] flex items-center justify-center">
            <HomeIcon size={18} />
          </div>
          <a href="#about">{translations.navbar.about}</a>
          <a href="#projects">{translations.navbar.projects}</a>
          <a href="#contact">{translations.navbar.contact}</a>
          <Switch />
        </div>
      </div>

    </div>
  )
}
