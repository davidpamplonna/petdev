import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

 export default function Home() {
  return (
    <div>
      <main>
       < Hero />
       < About />
       < Services />
       < Testimonials />
       <Footer />
      </main>
    </div>
  )
}