import { motion } from "framer-motion";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header";

function Epawn() {
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
					<div className="project-content-container" id="epawn">
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
							whileInView={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							style={{ cursor: "default" }}
						>
							<div className="project-card-image-container">
								<Image
									src={"/epawn-preview-landscape.png"}
									fill
									alt={"ePawn Pawnshop System"}
									priority={true}
								></Image>
							</div>
						</motion.div>
						<h1>ePawn Pawnshop System</h1>
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="github-link"
							href="https://github.com/Hideki-Kawachi/epawn"
							target="_blank"
						>
							GitHub Repository
						</motion.a>
						<h2>Project Goal:</h2>
						<p>
							This project was done to identify and solve the current issues
							being faced by the client company, R.Raymundo Pawnshop, while also
							providing them new avenues for growth. The developers focused on
							including features such as{" "}
							<b>
								inter-branch transaction processing, improved item
								identification, report generation, and online customer pawn
								renewals.
							</b>
						</p>
						<h2>System Features:</h2>
						<ul>
							<li>
								Fast transaction processing with pawnticket and receipt printing
							</li>
							<li>
								Integrated online transaction and payment processing using
								Paymongo API
							</li>
							<li>Support for inter-branch pawn transactions</li>
							<li>Comprehensive item identification system</li>
							<li>Printable report generation</li>
						</ul>
						<h2>Technologies Used:</h2>
						<ul style={{ marginBottom: "15vh" }}>
							<li>Next.js</li>
							<li>Tailwind CSS</li>
							<li>Paymongo</li>
							<li>MongoDB</li>
							<li>Iron-session</li>
							<li>Cloudinary</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Epawn;
