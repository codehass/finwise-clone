import HeroContent from "./HeroContent";

export function HeroSection() {
	return (
		<section
			id="hero_section"
			className="flex flex-col w-full pt-12 md:max-w-2xl"
		>
			<HeroContent />
		</section>
	);
}
