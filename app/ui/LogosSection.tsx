import PartnerLogo from "./PartnerLogo";

function LogosSection() {
	return (
		<div className="flex flex-wrap justify-between items-center w-full px-6 max-w-7xl">
			<PartnerLogo label="Notion" source="/notion.svg" />
			<PartnerLogo label="Stripe" source="/stripe.svg" />
			<PartnerLogo label="Dropbox" source="/dropbox.svg" />
			<PartnerLogo label="Shopify" source="/shopify.svg" />
			<PartnerLogo label="Slack" source="/slack.svg" />
		</div>
	);
}

export default LogosSection;
