import React, { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function ContactMe() {
	const [copied, setCopied] = useState(false);

	function copy() {
		console.log("HELLO");
		setCopied(true);
		navigator.clipboard.writeText("hideki.kawachi17@gmail.com");
		setTimeout(() => setCopied(false), 1500);
	}

	return (
		<>
			<Header></Header>
			<section id="contact-me-container" className="main-container">
				<AnimatePresence>
					{copied && (
						<motion.div
							className="copied-modal-container"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{
								opacity: 0,
								transition: { duration: 0.3 },
							}}
							transition={{ ease: "easeInOut", duration: 0.8 }}
						>
							<span>Email Copied!</span>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="content-area">
					<h1>CONTACT ME</h1>
					<div className="contact-info-container">
						<div className="contact-info-header">
							<h2>Ron Hideki L. Kawachi</h2>
							<span>Full-Stack Web Developer</span>
						</div>

						<motion.a
							href="https://www.linkedin.com/in/ron-hideki-kawachi-332623205/"
							target="_blank"
							whileHover={{
								y: -2,
								scale: 1.02,
								boxShadow: "4px 4px 20px 10px black",
							}}
						>
							<div className="contact-logo-container">
								<Image src={"/LI-Logo.png"} fill alt="LinkedIn"></Image>
							</div>
						</motion.a>
						<motion.a
							href="https://github.com/Hideki-Kawachi"
							target="_blank"
							whileHover={{
								y: -2,
								scale: 1.02,
								boxShadow: "4px 4px 20px 10px black",
							}}
						>
							<div className="contact-logo-container" id="github">
								<Image src={"/GitHub_Logo.png"} fill alt="Github"></Image>
							</div>
						</motion.a>

						<motion.button
							onClick={() => copy()}
							whileHover={{
								y: -2,
								scale: 1.02,
								boxShadow: "4px 4px 20px 10px black",
							}}
						>
							<div className="contact-logo-container">
								<Image src={"/Gmail_Logo.png"} fill alt="Gmail"></Image>
							</div>
							<span>hideki.kawachi17@gmail.com</span>
						</motion.button>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactMe;
