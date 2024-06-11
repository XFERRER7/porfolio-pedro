import Image from "next/image";
import logo from '@/assets/logo.svg';
import { HomeIcon } from "lucide-react"
import linkedinIcon from '@/assets/linkedinIcon.svg';
import whatsappIcon from '@/assets/whatsappIcon.svg';
import gmailIcon from '@/assets/gmailIcon.svg';

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


      <div className="p-0.5 menu-border rounded-full mx-auto md:w-auto w-full">
        <div className="h-12 md:w-[26rem] w-full rounded-full flex items-center justify-around md:text-sm text-xs gap-4 py-1 bg-[#1C1C1C]">

          <a href="#">
            <Image
              src={linkedinIcon}
              alt="icon"
              height={50}
              width={50}
              className="h-8 w-8"
            />
          </a>
          <a href="#">
            <Image
              src={gmailIcon}
              alt="icon"
              height={50}
              width={50}
              className="h-10 w-10"
            />
          </a>
          <a href="#">
            <Image
              src={whatsappIcon}
              alt="icon"
              height={50}
              width={50}
              className="h-8 w-8"
            />
          </a>

        </div>
      </div>

    </div>
  )
}
