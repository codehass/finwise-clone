import Image from "next/image";
import Navbar from "./ui/Navbar";
import Features from "./ui/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
      <Features />
      
      <section id="pricing" className="flex flex-col items-center justify-center h-screen bg-yellow-300">
        Pricing section 
      </section>
      <section id="testimonials" className="flex flex-col items-center justify-center h-screen bg-green-300">
      Testimonials section 
      </section>
    </main>
    </>
  );
}
