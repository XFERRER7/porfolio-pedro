import Image from "next/image";
import mainBg from '@/assets/main-bg.png';
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="w-full h-[calc(100vh-112px)] overflow-hidden">

        <Navbar />

        <div className="mt-20 h-full flex justify-center relative">
          <Image
            src={mainBg}
            alt="Main Background"
            className="w-full h-screen absolute -top-8"
          />

          <div className="flex flex-col gap-5 w-[30rem] items-center mt-40">

            <h2 className="text-4xl">Desenvolvedor Mobile</h2>
            <p className="text-center">
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
