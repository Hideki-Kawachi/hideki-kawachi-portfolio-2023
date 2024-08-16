import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";

function Hisight() {
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
					<div className="project-content-container" id="hisight">
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
							<div className="project-card-image-container">
								<Image
									src={"/hisight-obe-system.png"}
									fill
									alt={"Hisight Outcome Based Education System"}
									priority={true}
								></Image>
							</div>
						</motion.div>
						<h1>Hisight Outcome Based Education System</h1>
						{/* <motion.a
							whileHover={{ scale: 1.05 }}
							className="github-link"
							href="https://github.com/Hideki-Kawachi/epawn"
							target="_blank"
						>
							GitHub Repository
						</motion.a> */}
						<h2>Project Goal:</h2>
						<p>
							This project was made to identify and solve the current issues
							being experienced by higher education institutions with regards to
							outcome based education. To accommodate a wide range of colleges
							and universities, the developers focused on
							<b> integrating with Canvas LMS</b>, one of the most prominent
							learning management systems available.
							<br></br>
							<br></br>This integration led to the development of Hisight which
							enables institutions to comply with the Commission of Higher
							Education&apos;s Outcome Based Education guidelines while
							facilitating continuous quality improvement through modules such
							as{" "}
							<b>
								curriculum development, course development, multi-level
								analytics, term-end report generation, and program assessment.
							</b>
						</p>
						<h2>System Features:</h2>
						<ul>
							<li>
								Printable term-end report generation with data visualizations
							</li>
							<li>Multi-level data visualizations with slicers</li>
							<li>
								Built-in curriculum development module with optional excel
								template uploading
							</li>
							<li>
								Integration with Canvas LMS using their REST API in getting
								course and student data for analytics
							</li>
						</ul>
						<h2>Technologies Used:</h2>
						<ul style={{ marginBottom: "15vh" }}>
							<li>Next.js</li>
							<li>Tailwind CSS</li>
							<li>Canvas REST API integration</li>
							<li>Supabase</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hisight;
