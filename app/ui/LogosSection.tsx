import PartnerLogo from "./PartnerLogo";

const logos = [
	{ label: "Notion", source: "/notion.svg" },
	{ label: "Stripe", source: "/stripe.svg" },
	{ label: "Dropbox", source: "/dropbox.svg" },
	{ label: "Shopify", source: "/shopify.svg" },
	{ label: "Slack", source: "/slack.svg" },
];

function LogosSection() {
	return (
		<section className="w-full px-6 mx-auto py-32">
			<p className="text-center font-medium txt-lg">
				Trusted by <strong className="text-blue-700">2000+</strong> customers
				worldwide
			</p>
			<div className="flex flex-wrap justify-evenly items-center gap-5 sm:gap-10 mt-5">
				{logos.map((logo) => (
					<PartnerLogo key={logo.label} {...logo} />
				))}
			</div>
		</section>
	);
}

export default LogosSection;
