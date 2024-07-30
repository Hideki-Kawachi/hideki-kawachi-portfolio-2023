import React from "react";
import Header from "../../components/header";
import ProjectCard from "../../components/projectCard";

function Projects() {
	return (
		<>
			<Header></Header>
			<section id="projects-container" className="main-container">
				<div className="content-area">
					<h1>PROJECTS</h1>
					<div className="project-card-list-container">
						<ProjectCard
							image={"/hisight-obe-system.png"}
							title={"Hisight Outcome Based Education System"}
							description={
								"Led the development of an application aimed to guide universities in improving education quality through data visualizations while ensuring compliance with CHED's guidelines.  Closely worked with DLSU for..."
							}
							link={"/projects/hisight"}
							bgColor={"#276087"}
						></ProjectCard>
						<ProjectCard
							image={"/epawn-preview-landscape.png"}
							title={"ePawn Pawnshop System"}
							description={
								"Led the development of a Pawnshop information system that handles inter-branch transaction processing, online customer transactions, and inventory management.  Built in collaboration with R.Raymundo Pawnshop..."
							}
							link={"/projects/epawn"}
							bgColor={"#18273B"}
						></ProjectCard>
						<ProjectCard
							image={"/milaor-inventory-system-landscape.png"}
							title={"Milaor Inventory Management System"}
							description={
								"An inventory management system website that was built and designed in collaboration with the client, Milaor Trading corporation, a trucking company... "
							}
							link={"/projects/milaor"}
							bgColor={"#485D70"}
							// demo={"https://milaor-inventory-system.vercel.app/"}
						></ProjectCard>
						<ProjectCard
							image={"/simply-cookie-preview-landscape.png"}
							title={"Simply Cookie Product Platform"}
							description={
								"Built and designed a website to provide the client their own platform on which they can accept online orders and showcase their cookies..."
							}
							link={"/projects/simplyCookie"}
							bgColor={"#885733"}
							// demo={"https://simply-cookie.vercel.app/"}
						></ProjectCard>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
