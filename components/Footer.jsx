import { ButtonShimmer } from "./ui/ButtonShimmer"
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
    <div className="w-full absolute left-0 -bottom-72 min-h-96">
      <img
        src="/footer-grid.svg"
        alt="grid"
        className="w-full h-full opacity-50 "
      />
    </div>

    <div className="flex flex-col items-center my-10">
      <h1 className="heading my-10">Contáctame</h1>
      <a href="mailto:juan.09.molina@gmail.com">
        <ButtonShimmer
          title="Click aquí"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Juan Molina
      </p>

      <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" href={info.link} width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  </footer>
   
  )
}

export default Footer