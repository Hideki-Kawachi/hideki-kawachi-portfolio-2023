import React from "react";
import Header from "../components/header";
import ExperienceCard from "../components/experienceCard";

function Experiences() {
	const delay = 0.4;
	const experienceList = [
		{
			image: "/lophils.png",
			org: "LOPhils",
			duration: "Oct 2022 - Dec 2023",
			position: "Frontend Developer Intern",
			bullets: [
				"Became the top 2 developer with the most tickets resolved in the first month of the internship",
				"Developed features and refactored code for the company's application",
				"Assisted the team lead with developing a new dashboard module",
			],
		},
		{
			image: "/viiworks.png",
			org: "ViiWorks Software Solutions",
			duration: "March 2023 - May 2023",
			position: "Software Developer Intern",
			bullets: [
				"Contributed in creating the company's website, Travel Connect",
				"Implemented reporting modules for the company's content management system",
			],
		},
		{
			image: "/gdsc.jpg",
			org: "Google Students Developers Club",
			duration: "Oct 2022 - Aug 2023",
			position: "Director of Web Development",
			bullets: [
				"Planned events and internal workshops focused on teaching web development",
				"Led the development and designing of the organization's website",
			],
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Aug 2021 - Dec 2021",
			position: "Junior Officer for Corporate Relations",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - Aug 2021",
			position: "Corporate Relations Committee Executive - Hacker Cup 2021",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - Aug 2021",
			position: "Programs Committee Executive - Technology Summit 2021",
		},
		{
			image: "/lscs.jpg",
			org: "La Salle Computer Society",
			duration: "Jan 2021 - May 2021",
			position: "Junior Officer for Socio-Civic Committee",
		},
		{
			image: "/Ley.jpg",
			org: "LEY La Salle",
			duration: "Aug 2019 - Dec 2019",
			position: "Marketing Committee Executive - Business Law Central 2019",
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
								bullets={experience?.bullets}
							></ExperienceCard>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Experiences;
