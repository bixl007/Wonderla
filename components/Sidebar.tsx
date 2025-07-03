"use client";
import { useState } from "react";
import Image from "next/image";

const sidebarItems = [
	{
		title: "Parks",
		subtitle: "Explore your favourite Wonderla Park",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75"
				alt="park"
				className="w-6 h-6"
				width={24}
				height={24}
			/>
		),
		type: "accordion",
		content: [
			{
				name: "Bengaluru",
				image:
					"https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=96&q=75",
			},
			{
				name: "Kochi",
				image:
					"https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp?w=96&q=75",
			},
			{
				name: "Hyderabad",
				image:
					"https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=96&q=75",
			},
			{
				name: "Bhubaneswar",
				image:
					"https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=96&q=75",
			},
		],
	},
	{
		title: "Resorts",
		subtitle: "Get a rejuvenating experience at Wonderla Resort",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75"
				className="w-6 h-6"
				alt="resort"
				width={24}
				height={24}
			/>
		),
		type: "accordion",
		content: [
			{
				name: "Resort",
				image: "https://www.wonderla.com/images/bangalore-resort2.png?w=96&q=75",
			},
			{
				name: "The Isle",
				image: "https://www.wonderla.com/images/isle-resort.png?w=96&q=75",
			},
		],
	},
	{
		title: "Offers & Combos",
		subtitle: "Plan The Perfect Day With Exciting Offers",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75"
				className="w-6 h-6"
				alt=""
				width={24}
				height={24}
			/>
		),
		type: "link",
	},
	{
		title: "Timings And Guidelines",
		subtitle: "Know The Timings And Other Guidelines",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75"
				className="w-6 h-6"
				alt=""
				width={24}
				height={24}
			/>
		),
		type: "link",
	},
	{
		title: "Group Booking",
		subtitle: "Reach Out To Wonderla Team",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75"
				className="w-8 h-8"
				alt=""
				width={32}
				height={32}
			/>
		),
		type: "button-yellow",
	},
	{
		title: "Tour Operator Portal",
		subtitle: "Reach Out To Wonderla Team",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=48&q=75"
				className="w-8 h-8"
				alt=""
				width={32}
				height={32}
			/>
		),
		type: "button-blue",
	},
	{
		title: "How To Reach",
		subtitle: "Reach Out To Wonderla Team",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/how_to_reach_f52afe8765.svg?w=48&q=75"
				className="w-8 h-8"
				alt=""
				width={32}
				height={32}
			/>
		),
		type: "button-yellow",
	},
	{
		title: "About Us",
		subtitle: "Directions, Routes & Travel Options",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75"
				alt=""
				className="w-6 h-6"
				width={24}
				height={24}
			/>
		),
		type: "link",
	},
	{
		title: "Quick Links",
		subtitle: "Explore all other relevant information here",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75"
				alt=""
				className="w-6 h-6"
				width={24}
				height={24}
			/>
		),
		type: "accordion",
		content: ["Restaurants", "Merchandise", "Events"],
	},
	{
		title: "Contact Us",
		subtitle: "Get In Touch Wonderla Team",
		icon: (
			<Image
				src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75"
				className="w-6 h-6"
				alt=""
				width={24}
				height={24}
			/>
		),
		type: "link",
	},
];

const Sidebar = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const [openAccordion, setOpenAccordion] = useState<string | null>(null);

	const toggleAccordion = (title: string) => {
		if (openAccordion === title) {
			setOpenAccordion(null);
		} else {
			setOpenAccordion(title);
		}
	};

	return (
		<div className="relative">
			<div
				className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 ${
					isOpen ? "opacity-35" : "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
			/>
			<div
				className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-20 flex flex-col ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center p-4 ">
					<Image
						src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75"
						alt="logo"
						className="h-12"
						width={128}
						height={48}
					/>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-800 border-[0.5] p-1 rounded-xl"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18 6L6 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6 6L18 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
				<div className="overflow-y-auto">
					<div className="p-4">
						{sidebarItems.map((item) => {
							if (item.type === "accordion") {
								return (
									<div
										key={item.title}
										className="py-5 border-b-[0.5] border-gray-300 "
									>
										<div
											className="flex justify-between items-center cursor-pointer"
											onClick={() => toggleAccordion(item.title)}
										>
											<div className="flex items-center space-x-4">
												{item.icon}
												<div>
													<p className="font-semibold text-gray-800 text-xl">
														{item.title}
													</p>
													<p className="text-xs text-gray-500">
														{item.subtitle}
													</p>
												</div>
											</div>
											<svg
												width="16"
												height="16"
												viewBox="0 0 20 20"
												fill="currentColor"
												className={`transition-transform duration-300 ${
													openAccordion === item.title
														? "rotate-180"
														: ""
												}`}
											>
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div
											className={`overflow-hidden transition-all duration-500 ease-in-out ${
												openAccordion === item.title
													? "max-h-screen"
													: "max-h-0"
											}`}
										>
											{item.content && (
												<div className="pl-10 pt-2">
													{item.title === "Parks" && (
														<div className="grid grid-cols-2 gap-4 mt-2">
															{(item.content as { name: string; image: string }[]).map(
																(park) => (
																	<div
																		key={park.name}
																		className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
																	>
																		<Image
																			src={park.image}
																			alt={park.name}
																			className="w-16 h-16 rounded-full object-cover"
																			width={64}
																			height={64}
																		/>
																		<p className="text-sm font-semibold">
																			{park.name}
																		</p>
																	</div>
																)
															)}
														</div>
													)}
													{item.title === "Resorts" && (
														<div className="grid grid-cols-2 gap-4 mt-2">
															{(item.content as { name: string; image: string }[]).map(
																(resort) => (
																	<div
																		key={resort.name}
																		className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
																	>
																		<Image
																			src={resort.image}
																			alt={resort.name}
																			className="w-16 h-16 rounded-full object-cover"
																			width={64}
																			height={64}
																		/>
																		<p className="text-sm font-semibold">
																			{resort.name}
																		</p>
																	</div>
																)
															)}
														</div>
													)}
													{item.title === "Quick Links" && (
														<div className="flex flex-col gap-3 text-sm font-medium">
															{(item.content as string[]).map((link) => (
																<a
																	key={link}
																	href="#"
																	className="text-gray-600 rounded-lg"
																>
																	{link}
																</a>
															))}
														</div>
													)}
												</div>
											)}
										</div>
									</div>
								);
							} else if (item.type.startsWith("button")) {
								const bgColor =
									item.type === "button-yellow"
										? "bg-yellow-400"
										: "bg-blue-600";
								const textColor =
									item.type === "button-yellow"
										? "text-black"
										: "text-white";
								return (
									<div key={item.title} className="py-2">
										<button
											className={`w-full text-left p-3 rounded-lg flex cursor-pointer items-center space-x-4 ${bgColor} ${textColor}`}
										>
											{item.icon}
											<div>
												<p className="font-bold text-xl">{item.title}</p>
												<p className="text-xs">{item.subtitle}</p>
											</div>
										</button>
									</div>
								);
							} else {
								return (
									<div
										key={item.title}
										className="flex items-center space-x-4 py-3 cursor-pointer hover:bg-gray-100 p-2 border-b-[0.5] border-gray-300"
									>
										{item.icon}
										<div>
											<p className="font-semibold text-gray-800 text-xl">
												{item.title}
											</p>
											<p className="text-xs text-gray-500">
												{item.subtitle}
											</p>
										</div>
									</div>
								);
							}
						})}
					</div>
				</div>
				<Image
					src="https://www.wonderla.com/_next/static/media/header-drawer-bottom-icon.0d0f9f60.png?w=640&q=75"
					alt="ride"
					className="absolute bottom-0 right-0 w-45  opacity-80 -z-10"
					width={640}
					height={75}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
