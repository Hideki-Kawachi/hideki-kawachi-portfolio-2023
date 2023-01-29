import React from "react";
import Header from "../components/header";
import Image from "next/image";
import ExperienceCard from "../components/experienceCard";
import { AnimatePresence, motion } from "framer-motion";

function Experiences() {
	const delay = 0.4;
	const experienceList = [
		{
			image: "/gdsc.jpg",
			org: "Google Students Developers Club",
			duration: "Oct 2022 - Present",
			position: "Director of Web Development",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - Aug 2021",
			position: "Corporate Relations Committee Executive",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - Aug 2021",
			position: "Programs Committee Executive",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - May 2021",
			position: "Junior Officer for Socio-Civic Committee",
		},
	];

	return (
		<>
			<Header></Header>
			<section id="experiences-container" className="main-container">
				<div className="content-area">
					<h1>EXPERIENCES</h1>
					<div className="experience-list-container">
						{experienceList.map((experience, index) => (
							<ExperienceCard
								key={experience.position}
								image={experience.image}
								org={experience.org}
								duration={experience.duration}
								position={experience.position}
								timing={1.2 + delay * index}
							></ExperienceCard>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Experiences;
