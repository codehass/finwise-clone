import Image from "next/image";
import StoreButton from "./StoreButton";

function HeroContent() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="font-bold text-4xl md:text-6xl text-center">
				Smart, Secure, Simple Financial Management
			</h1>
			<p className="text-center my-6 mx-9 text-xl">
				From effortless budgeting to real-time investment insights, Finwise puts
				you in control of your money like never before.
			</p>
			<div className="flex justify-center gap-4 my-6">
				<StoreButton src="/playstore.svg" label="Google Play" />
				<StoreButton
					src="/appel.svg"
					label="App Store"
					subtitle="Download on the"
				/>
			</div>
			<Image
				src="/hero-mockup.webp"
				alt="Finwise App Mockup"
				width={384}
				height={340}
				priority
				className="mt-4"
			/>
		</div>
	);
}

export default HeroContent;
