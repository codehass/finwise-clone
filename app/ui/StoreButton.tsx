import Image from "next/image";

type StorButtonProps = {
	label: string;
	src: string;
	subtitle?: string;
};

function StoreButton({ label, src, subtitle = "GET IT ON" }: StorButtonProps) {
	return (
		<button
			className="flex items-center gap-3 bg-black text-white px-6 rounded-3xl h-14"
			aria-label="Download on Google Play"
		>
			<Image src={src} alt={`${label} logo`} width={30} height={30} />
			<div>
				<p className="text-xs">{subtitle}</p>
				<a href="#" className="text-xl font-bold">
					{label}
				</a>
			</div>
		</button>
	);
}

export default StoreButton;
