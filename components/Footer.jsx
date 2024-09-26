import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { ButtonShimmer } from "./ui/ButtonShimmer";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center my-20">
        <h1 className="heading lg:max-w-[45vw] mb-10">
          Contáctame
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center mb-10">
        Comunícate conmigo hoy y analicemos cómo puedo ayudarte
        Alcanza tus objetivos.
        </p>
        <a className="z-10" href="mailto:juan.09.molina@gmail.com">
          <ButtonShimmer
            title="Click Aquí"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex pb-0 bottom-0 my-20 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Juan Molina
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a className="z-10" href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;