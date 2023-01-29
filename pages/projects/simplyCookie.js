import { motion } from "framer-motion";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header";

function SimplyCookie() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(max-width: 767px)").matches) {
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
					<div className="project-content-container" id="simply-cookie">
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
							onClick={() => window.open("https://simply-cookie.vercel.app/")}
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
									src={"/simply-cookie-preview-landscape.png"}
									fill
									alt={"Simply Cookie E-Commerce Platform"}
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
						<h1>Simply Cookie E-Commerce Platform</h1>
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="github-link"
							href="https://github.com/Hideki-Kawachi/simply-cookie"
						>
							GitHub Repository
						</motion.a>
						<h2>Project Goal:</h2>
						<p>
							The goal of this project was to closely work with the client on
							the design and the features to be implemented in the website. The
							resulting website should match the overall aesthetic and feel of
							the client&apos;s brand.
						</p>
						<h2>System Features:</h2>
						<ul>
							<li>Image Carousel</li>
							<li>Modularized Item Menu</li>
							<li>Online order accepting and scheduling</li>
							<li>Proof of payment acceptance</li>
						</ul>
						<h2>Technologies Used:</h2>
						<ul style={{ marginBottom: "15vh" }}>
							<li>Next.js</li>
							<li>Tailwind CSS</li>
							<li>SCSS</li>
							<li>Framer Motion</li>
							<li>Lottie Animation</li>
							<li>MongoDB</li>
							<li>Cloudinary</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default SimplyCookie;
