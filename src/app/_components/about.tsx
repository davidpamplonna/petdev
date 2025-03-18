import Image from "next/image";
import aboutImage1 from "../../../public/about-1.png";
import aboutImage2 from "../../../public/about-2.png";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";

export const About = () => {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >

        <div className="relative" data-aos="fade-up-right">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={aboutImage1}
              alt="Foto do cachorro"
              fill
              quality={100}
              className="object-cover  hover:scale-110 duration-300"
              priority
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white" >
            <Image
              src={aboutImage2}
              alt="Foto do cachorro"
              fill
              quality={100}
              priority
            />
          </div>
        </div>


        <div className="space-y-6 mt-10" data-aos="fade-up-left">
          <h2 className="text-4xl font-bold ">SOBRE</h2>
          <p>
            Unti1 one has Ioved an animal, a part Of one's soul remains
            unawakened. We believe in it and we believe in easy access to things
            that are good for our mind, body and spirit. With a clever offering,
            superb support and a secure checkout you're in good hands.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Aberto deste 2006
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Equipe com mais de 10 veterinários
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Qualidade e nossa prioridade
            </li>
          </ul>

         <div className="flex gap-2">
         <a href="#" className="bg-[#e84c3d] text-white flex items-center justify-center gap-2 px-4 py-4 rounded-md">
            <FaWhatsapp className="w-5 h-5 text-white" />
            Contato via Whatsapp
          </a>

          <a href="#" className=" text-black flex items-center justify-center gap-2 px-4 py-4 rounded-md">
            <RiMapPinLine className="w-5 h-5 text-black" />
           Endereço da loja
          </a>
         </div>
          
        </div>

        </div>
      


      </div>
    </section>
  );
};
