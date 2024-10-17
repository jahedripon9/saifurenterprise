import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faRandom } from "@fortawesome/free-solid-svg-icons";

const features = [
	{
		icon: faCannabis,
		title: "Awesome Support",
		desc: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		icon: faRandom,
		title: "Get your documentation .",
		desc: "Under saying our appear Second their heaven created shall darkness him great kind open creature Deep open had i above.",
	},
	{
		icon: faCannabis,
		title: "Thousands of Options",
		desc: "Male also herb fish gathered is. Without thing. Him divided gathering there rule. Us. Creepeth. Over evening gathered. Living be.",
	},
	{
		icon: faRandom,
		title: "Pick the type of banking.",
		desc: "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in variousnations.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="relative p-4 md:p-10">
			<div className="h-16 w-16 bg-white dark:bg-slate-800 shadow-xl flex justify-center items-center text-blue-600 rounded-full text-3xl mb-6 mr-6">
				<FontAwesomeIcon icon={feature.icon} />
			</div>
			<div>
				<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
				<p className="opacity-70">{feature.desc}</p>
			</div>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature33 = () => {
	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
					<div className="w-full lg:w-1/3">
						<div className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-40 rounded-b-[200px] text-center h-full -mt-24 px-4">
							<img
								src="https://cdn.easyfrontend.com/pictures/rose.png"
								alt=""
								className="rounded-full mx-auto"
								width="250"
							/>
						</div>
					</div>

					<div className="w-full lg:w-2/3">
						<div className="xl:ml-6 w-full">
							<div className="grid grid-cols-2 w-full">
								{features.map((feature, i) => (
									<div className="col-span-2 lg:col-span-1" key={i}>
										<FeatureItem feature={feature} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Feature33;