import Image from "next/image";
import Navbar from "./ui/Navbar";
import Features from "./ui/Features";
import Pricing from "./ui/Pricing";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center justify-center">
				<Features />
				<Pricing />
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
