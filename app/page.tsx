import Image from "next/image";
import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import Features from "./ui/Features";
import LogosSection from "./ui/LogosSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center justify-center">
				<HeroSection />
				<LogosSection />
				<Features />
				<section
					id="testimonials"
					className="flex flex-col items-center justify-center h-screen bg-green-300"
				>
					Testimonials section
				</section>
			</main>
		</>
	);
}
