'use client'
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Typewriter from 'typewriter-effect'
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import mainBg from "@/assets/main-bg.png";
import star from "@/assets/stars.svg";


export const Header = () => {

  const [key, setKey] = useState(Date.now());
  const { translations } = useLanguage();

  useEffect(() => {
    setKey(Date.now());
  }, [translations]);

  return (
    <div className='w-full h-[calc(100vh-112px)] overflow-hidden relative' id='about'>

      <Navbar />

      <div className='mt-24 w-full h-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        {/* <Image
          src={mainBg}
          alt="Main Background"
          className="w-full h-[108vh] absolute -top-8 lg:block "
        /> */}

        {/* <Image
          src={star}
          alt="Star"
          className="absolute top-[3.5rem] right-[12.3rem]"
        />

        <Image
          src={star}
          alt="Star"
          className="absolute bottom-[10.8rem] left-[12.3rem]"
        /> */}


        <div className='flex flex-col gap-5 w-[30rem] items-center mt-40'>

          <h2 className='lg:text-4xl text-2xl text-center'>{translations.aboutSection.title}</h2>

          <p className='text-center lg:text-base text-sm lg:w-auto w-3/5 h-32'>
            <Typewriter
              key={key}
              options={{
                delay: 20,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(translations.aboutSection.description).start();
              }}
              component='span'
            />
          </p>

          <button
            className='button-gradient text-black px-5 py-3 rounded-lg w-48'
            onClick={() => window.open("https://www.linkedin.com/in/pedro-developeer/", "_blank")}
          >
            {translations.aboutSection.button}
          </button>

        </div>

      </div>

    </div>
  )
}
