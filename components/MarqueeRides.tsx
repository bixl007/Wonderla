import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const stats = [
	{
		icon: "https://d22pimhl2qmbj7.cloudfront.net/public/image_2aaca6b757.png?w=128&q=75",
		number: 4,
		label: "Amusements Parks",
	},
	{
		icon: "https://d22pimhl2qmbj7.cloudfront.net/public/image_1_a5cbb15e09.png?w=128&q=75",
		number: 163,
		label: "Fun Rides",
	},
	{
		icon: "https://d22pimhl2qmbj7.cloudfront.net/public/image_4_916aed2bea.png?w=128&q=75",
		number: 19,
		label: "Restaurants",
	},
	{
		icon: "https://d22pimhl2qmbj7.cloudfront.net/public/image_3_bfa70fb052.png?w=128&q=75",
		number: 11,
		label: "Bars",
	},
];

const StatCard = ({
	icon,
	number,
	label,
}: {
	icon: string;
	number: number;
	label: string;
}) => {
	return (
		<div className="flex items-center gap-4">
			<div className="w-30 h-18 rounded-full bg-white flex items-center justify-center">
				<Image src={icon} alt={label} width={120} height={80} className=" object-cover h-20 rounded-full" />
			</div>
			<div className="flex items-center gap-2">
				<span className="text-7xl font-extrabold text-white">{number}</span>
				<span className="text-4xl text-white font-semibold">{label}</span>
			</div>
            <div className="w-5 h-5 rounded-[100%] bg-yellow-300"></div>
		</div>
	);
};

export function MarqueeRides() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
			<Marquee pauseOnHover className="[--duration:20s]">
				{stats.map((stat) => (
					<StatCard key={stat.label} {...stat} />
				))}
			</Marquee>
		</div>
	);
}
