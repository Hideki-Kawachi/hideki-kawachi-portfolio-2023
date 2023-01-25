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
							image={"/milaor-inventory-system-landscape.png"}
							title={"Milaor Inventory System"}
							description={
								"An inventory system website that was built and designed in collaboration with the client, Milaor Trading corporation, a trucking company... "
							}
							link={"/projects/milaor"}
							linkColor={"#0094FF"}
							bgColor={"#485D70"}
							demo={"https://milaor-inventory-system.vercel.app/"}
						></ProjectCard>
						<ProjectCard
							image={"/simply-cookie-preview-landscape.png"}
							title={"Simply Cookie E-Commerce Platform"}
							description={
								"A website built to provide the client their own platform on which they can accept online orders and showcase their cookies..."
							}
							link={"/projects/simplyCookie"}
							linkColor={"#FFB800"}
							bgColor={"#885733"}
							demo={"https://simply-cookie.vercel.app/"}
						></ProjectCard>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
