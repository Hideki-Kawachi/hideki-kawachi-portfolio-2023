import { motion } from "framer-motion";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header";

function Milaor() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(max-width: 820px)").matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	const router = useRouter();

	return (
		<>
			<Header></Header>
			<section id="projects-page-container" className="main-container">
				<div className="content-area">
					<div className="project-content-container" id="milaor">
						{isMobile ? (
							<button
								className="back-button"
								onClick={() => {
									router.push("/projects/");
								}}
							>
								<svg
									width="20"
									height="43"
									viewBox="0 0 20 43"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18 2L2 21.5L18 41"
										stroke="#E4E4E4"
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						) : (
							<></>
						)}

						<motion.div
							className="project-card-header-container"
							whileInView={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							style={{ cursor: "default" }}
						>
							<div
								className="project-card-image-container"
								// whileHover={{
								// 	scale: 1.01,
								// 	transition: { duration: 0.2 },
								// }}
							>
								<Image
									src={"/milaor-inventory-system-landscape.png"}
									fill
									alt={"Milaor Inventory System"}
									priority={true}
								></Image>
							</div>
						</motion.div>
						<h1>Milaor Inventory Management System</h1>
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="github-link"
							href="https://github.com/Hideki-Kawachi/itisdev-mp/tree/demo"
							target="_blank"
						>
							GitHub Repository
						</motion.a>
						<h2>Project Goal:</h2>
						<p>
							The main goal of this project was to analyze and identify the
							present within the client&apos;s internal processes and systems
							and provide solutions. The main features of the system is{" "}
							<b>
								item flow tracking, vehicle history tracking, and report
								generation.
							</b>
						</p>
						<h2>System Features:</h2>
						<ul>
							<li>
								Dashboard presents important information such as inventory
								in-flow and out-flow as well as the items that need to be
								restocked.
							</li>
							<li>User management and authorization</li>
							<li>
								Systematic documentation of vehicle details and their repairs
								and maintenance
							</li>
							<li>Standardized item recording</li>
							<li>Inventory and audit report generation</li>
						</ul>
						<h2>Technologies Used:</h2>
						<ul style={{ marginBottom: "15vh" }}>
							<li>Next.js</li>
							<li>SCSS</li>
							<li>MongoDB</li>
							<li>Iron-session</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Milaor;
