import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Project from "@/components/project/project";
import Service from "@/components/service/service";
import Testimonials from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <main className="md:px-24 px-10 py-5 ">
        <header>
          <Navbar />
        </header>
        <section id="home" className=" mt-16 md:mt-20">
          <Hero />
        </section>
        <section id="about" className=" mt-16 md:mt-28">
          <About />
        </section>
        <section id="services" className=" mt-16 md:mt-28">
          <Service />
        </section>
        <section id="project" className=" mt-16 md:mt-28">
          <Project />
        </section>
        <section id="testimonial" className=" mt-16 md:mt-28">
          <Testimonials />
        </section>
        <section id="contact" className=" mt-16 md:mt-28">
          <Contact />
        </section>
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </>
  );
}
