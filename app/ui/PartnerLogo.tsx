import Image from "next/image";

type PartnerLogoProps = {
  label: string;
  source: string;
};

function PartnerLogo({ label, source }: PartnerLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={source}
        alt={`${label} logo`}
        width={35}
        height={35}
        className="text-gray-400"
      />
      <span className="font-bold text-3xl text-[#8b8b8b]">{label}</span>
    </div>
  );
}

export default PartnerLogo;
