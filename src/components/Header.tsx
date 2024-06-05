import Image from "next/image";
import mainBg from '@/assets/main-bg.png';
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="w-full h-[calc(100vh-112px)] overflow-hidden relative">

        <Navbar />

        <div className="mt-20 h-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* <Image
            src={mainBg}
            alt="Main Background"
            className="w-full h-screen absolute -top-8 lg:block hidden"
          /> */}

          <div className="flex flex-col gap-5 w-[30rem] items-center mt-40">

            <h2 className="lg:text-4xl text-2xl text-center">Desenvolvedor Mobile</h2>
            <p className="text-center lg:text-base text-sm lg:w-auto w-3/5">
              Sou um desenvolvedor mobile especializado em Flutter, com experiência no ecossistema de desenvolvimento móvel, valorizando a liberdade, ética e sinceridade em todas as minhas atividades.
            </p>

            <button
              className="button-gradient text-black px-5 py-3 rounded-lg w-48"
            >
              Veja meu LinkedIn
            </button>

          </div>

        </div>

      </div>
  )
}
