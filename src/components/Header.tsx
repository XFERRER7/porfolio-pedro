'use client'
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Typewriter from 'typewriter-effect'
import { useLanguage } from "@/hooks/useLanguage";
import useLanguageStore from "@/store/langStore";


export const Header = () => {

  const [key, setKey] = useState(Date.now());
  const { translations } = useLanguage();

  useEffect(() => {
    setKey(Date.now());
  }, [translations]);

  return (
    <div className='w-full h-[calc(100vh-112px)] overflow-hidden relative' id='about'>

      <Navbar />
      
      <div className='mt-20 h-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {/* <Image
        src={mainBg}
        alt="Main Background"
        className="w-full h-screen absolute -top-8 lg:block hidden"
      /> */}

        <div className='flex flex-col gap-5 w-[30rem] items-center mt-40'>

          <h2 className='lg:text-4xl text-2xl text-center'>{translations.aboutSection.title}</h2>

          <p className='text-center lg:text-base text-sm lg:w-auto w-3/5 h-32'>
            <Typewriter
              key={key} // This ensures the Typewriter re-renders when the key changes
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
