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
										stroke-width="4"
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
							onClick={() =>
								window.open(
									"https://milaor-inventory-system.vercel.app/",
									"_blank"
								)
							}
							whileInView={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<motion.div
								className="project-card-image-container"
								whileHover={{
									scale: 1.01,
									transition: { duration: 0.2 },
								}}
							>
								<Image
									src={"/milaor-inventory-system-landscape.png"}
									fill
									alt={"Milaor Inventory System"}
									priority={true}
								></Image>
							</motion.div>
							<svg
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.3332 6.6665H4.99984C4.11578 6.6665 3.26794 7.01769 2.64281 7.64281C2.01769 8.26794 1.6665 9.11578 1.6665 9.99984V24.9998C1.6665 25.8839 2.01769 26.7317 2.64281 27.3569C3.26794 27.982 4.11578 28.3332 4.99984 28.3332H19.9998C20.8839 28.3332 21.7317 27.982 22.3569 27.3569C22.982 26.7317 23.3332 25.8839 23.3332 24.9998V16.6665M11.6665 18.3332L28.3332 1.6665M28.3332 1.6665H19.9998M28.3332 1.6665V9.99984"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</motion.div>
						<h1>Milaor Inventory System</h1>
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
