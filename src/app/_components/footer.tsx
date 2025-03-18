import royal from "../../../public/royal.png";
import golden from "../../../public/golden.png";
import primier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import whiskas from "../../../public/whiskas.png";
import golden1 from "../../../public/golden.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden1", logo: golden1 },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
        <h4 className="text-xl font-semibold mb-8 text-center py-8 ">Marcas que trabalhamos</h4>
        <div className="grid grid-cols-6 gap-8">
            {brands.map((item,index) => (
                <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image 
                    src={item.logo} 
                    alt={item.name} 
                    width={100} 
                    height={50} 
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                    />
                </div>
           ) )}
        </div>
        </div>
        <div>
         <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
           <div>
            <h3 className="text2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a href="#" className="bg-green-500 px-4 rounded-md">
                Contato via whatsapp
            </a>
           </div>
           <div>
           <h3 className="text2xl font-semibold mb-2">Contatos</h3>
            <p>E-mail: teste@teste.com</p>
            <p>Telefone: (xx)xxxx-xxxx </p>
            <p>Rua X, centro campo grande | MS</p>
           </div>

           <div>
           <h3 className="text2xl font-semibold mb-2">Redes Sociais</h3>
        <div className="flex gap-3">
           <a href="#">
            <FaFacebook className="w-5 h-5"/>
           </a>
           <a href="#">
            <FaInstagram className="w-5 h-5" />
           </a>
           <a href="#">
            <FaYoutube  className="w-5 h-5"/>
           </a>
        </div>
           </div>
         </footer>
        </div>
      </div>
    </section>
  );
}
